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

beforeEach(() => {
  jest.clearAllMocks()
})

test('init - mock error', async () => {
  expect(Client.init(null)).toEqual(true)
  expect(Client.init()).toEqual(true)
})

test('init - mock success', async () => {
  const config = {
    apiKey: 'spacecat-clientId',
    accessToken: 'spacecat-accessToken',
    tenantName: 'spacecat-tenantName'
  }
  expect(Client.init(config)).toEqual(true)
})

test('_deleteOffer - empty id', async () => {
  return expect(Client._deleteOffer(null)).rejects.toEqual(new Error('The id cannot be empty.'))
})

test('_getOffer - empty id', async () => {
  return expect(Client._getOffer(null)).rejects.toEqual(new Error('The id cannot be empty.'))
})

test('_createOffer - empty name', async () => {
  return expect(Client._createOffer(null, 'content', null)).rejects.toEqual(new Error('The name cannot be empty. Max length is 250 characters.'))
})

test('_createOffer - empty content', async () => {
  return expect(Client._createOffer('name', null, null)).rejects.toEqual(new Error('The content cannot be empty.'))
})

test('_updateOffer - empty id', async () => {
  return expect(Client._updateOffer(null, 'name', 'content')).rejects.toEqual(new Error('The id cannot be empty.'))
})

test('_updateOffer - empty name', async () => {
  return expect(Client._updateOffer('id', null, 'content')).rejects.toEqual(new Error('The name cannot be empty. Max length is 250 characters.'))
})

test('_updateOffer - empty content', async () => {
  return expect(Client._updateOffer('id', 'name', null)).rejects.toEqual(new Error('The content cannot be empty.'))
})
