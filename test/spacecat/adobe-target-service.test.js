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
const Client = require('../../src/spacecat-core/client')
const AdobeTarget = require('../../src/spacecat/adobe-target-service')
const config = require('@adobe/aio-cli-config')

beforeEach(() => {
  jest.clearAllMocks()
})

test('getOffer - mock client error', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  AdobeTarget.init()
  expect.assertions(2)
  Client._getOffer = jest.fn()
  Client._getOffer.mockImplementation(() => {
    return undefined
  })
  let runResult = AdobeTarget.getOffer('391902')
  await expect(runResult).resolves.toEqual({})
  runResult = AdobeTarget.getOffer()
  await expect(runResult).resolves.toEqual({})
})

test('updateOffer - mock client error', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  AdobeTarget.init()
  expect.assertions(2)
  Client._updateOffer = jest.fn()
  Client._updateOffer.mockImplementation(() => {
    return undefined
  })
  let runResult = AdobeTarget.updateOffer('438180')
  await expect(runResult).resolves.toEqual({})
  runResult = AdobeTarget.updateOffer()
  await expect(runResult).resolves.toEqual({})
})

test('deleteOffer - mock client error', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  AdobeTarget.init()
  expect.assertions(2)
  Client._deleteOffer = jest.fn()
  Client._deleteOffer.mockImplementation(() => {
    return undefined
  })
  let runResult = AdobeTarget.deleteOffer('438180')
  await expect(runResult).resolves.toEqual({})
  runResult = AdobeTarget.deleteOffer()
  await expect(runResult).resolves.toEqual({})
})

test('createOffer - mock client error', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  AdobeTarget.init()
  expect.assertions(5)
  Client._createOffer = jest.fn()
  Client._createOffer.mockImplementation(() => {
    return undefined
  })
  let runResult = AdobeTarget.createOffer('438180', 'My new offer', '<div>The content of the offer</div>', '1234567')
  await expect(runResult).resolves.toEqual({})
  runResult = AdobeTarget.createOffer('438180', 'My new offer', '<div>The content of the offer</div>')
  await expect(runResult).resolves.toEqual({})
  runResult = AdobeTarget.createOffer('438180', 'My new offer', '<div>The content of the offer</div>')
  await expect(runResult).resolves.toEqual({})
  runResult = AdobeTarget.createOffer('438180', 'My new offer')
  await expect(runResult).resolves.toEqual({})
  runResult = AdobeTarget.createOffer()
  await expect(runResult).resolves.toEqual({})
})

test('listOffers - mock client error', async () => {
  config.get.mockImplementation(() => {
    return {
      client_id: 'spacecat-clientId',
      access_token: 'spacecat-accessToken',
      tenantName: 'spacecat-tenantName'
    }
  })
  AdobeTarget.init()
  expect.assertions(4)
  Client._listOffers = jest.fn()
  Client._listOffers.mockImplementation(() => {
    return undefined
  })
  let runResult = AdobeTarget.listOffers(null, null, null)
  await expect(runResult).resolves.toEqual([])
  runResult = AdobeTarget.listOffers(null, null)
  await expect(runResult).resolves.toEqual([])
  runResult = AdobeTarget.listOffers(null)
  await expect(runResult).resolves.toEqual([])
  runResult = AdobeTarget.listOffers()
  await expect(runResult).resolves.toEqual([])
})
