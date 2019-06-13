/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const CreateOfferCommand = require('../../../src/commands/adobe-target/create-offer')
const config = require('@adobe/aio-cli-config')

beforeEach(() => {
  jest.clearAllMocks()
})

test('create-offer - missing config', async () => {
  expect.assertions(2)
  let runResult = CreateOfferCommand.run(['myOffer', 'myContent'])
  await expect(runResult instanceof Promise).toBeTruthy()
  await expect(runResult).rejects.toEqual(new Error('missing config data: target'))
})

test('create-offer - missing args', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  expect.assertions(2)
  let runResult = CreateOfferCommand.run([])
  await expect(runResult).rejects.toThrow()
  runResult = CreateOfferCommand.run(['offerName'])
  await expect(runResult).rejects.toThrow()
})

test('create-offer - mock parameter scenarios', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  expect.assertions(3)
  let runResult = CreateOfferCommand.run(['My new offer', '<div>The content of the offer</div>', '-w=1234567'])
  await expect(runResult).resolves.toEqual({ 'id': '438180', 'name': 'My new offer', 'content': '<div>The content of the offer</div>', 'modifiedAt': '2017-07-10T20:46:53Z', 'workspace': '1234567' })
  runResult = CreateOfferCommand.run(['My new offer', '<div>The content of the offer</div>', '-w=12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901'])
  await expect(runResult).rejects.toThrow(new Error('The workspace max length is 250 characters.'))
  runResult = CreateOfferCommand.run(['My new offer', '-w=1234567'])
  await expect(runResult).rejects.toThrow()
})

test('create-offer - mock error', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'error-tenantName'
    }
  })
  expect.assertions(1)
  let runResult = CreateOfferCommand.run(['-n=My new offer', '-c=<div>The content of the offer</div>', '-w=1234567'])
  await expect(runResult).rejects.toThrow()
})
