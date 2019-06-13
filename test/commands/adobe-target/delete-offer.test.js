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
const DeleteOfferCommand = require('../../../src/commands/adobe-target/delete-offer')
const config = require('@adobe/aio-cli-config')

beforeEach(() => {
  jest.clearAllMocks()
})

test('delete-offer - missing config', async () => {
  expect.assertions(2)
  let runResult = DeleteOfferCommand.run(['438180'])
  await expect(runResult instanceof Promise).toBeTruthy()
  await expect(runResult).rejects.toEqual(new Error('missing config data: target'))
})

test('delete-offer - missing id', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  expect.assertions(2)
  let runResult = DeleteOfferCommand.run([])
  await expect(runResult instanceof Promise).toBeTruthy()
  await expect(runResult).rejects.toThrow()
})

test('delete-offer - mock parameter scenarios', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  expect.assertions(2)
  let runResult = DeleteOfferCommand.run(['438180'])
  await expect(runResult).resolves.toEqual({ 'id': '438180', 'name': 'Your existing offer', 'content': '<div>Updated content</div>', 'modifiedAt': '2017-07-10T20:55:41Z', 'workspace': '1234567' })
  runResult = DeleteOfferCommand.run(['438181'])
  await expect(runResult).rejects.toThrow()
})
