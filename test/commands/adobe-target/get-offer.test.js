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
const GetOfferCommand = require('../../../src/commands/adobe-target/get-offer')
const config = require('@adobe/aio-cli-config')

beforeEach(() => {
  jest.clearAllMocks()
})

test('get-offer - missing config', async () => {
  expect.assertions(2)
  let runResult = GetOfferCommand.run(['438180'])
  await expect(runResult instanceof Promise).toBeTruthy()
  await expect(runResult).rejects.toEqual(new Error('missing config data: target'))
})

test('get-offer - missing id', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  expect.assertions(2)
  let runResult = GetOfferCommand.run([])
  await expect(runResult instanceof Promise).toBeTruthy()
  await expect(runResult).rejects.toThrow()
})

test('get-offer - mock parameter scenarios', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  expect.assertions(2)
  let runResult = GetOfferCommand.run(['391902'])
  await expect(runResult).resolves.toEqual({ 'id': '391902', 'name': '10OFF', 'content': 'Use 10OFF for $10 off for orders over $100', 'modifiedAt': '2017-03-19T00:06:47Z', 'workspace': '1234567' })
  runResult = GetOfferCommand.run(['123123'])
  await expect(runResult).rejects.toThrow()
})
