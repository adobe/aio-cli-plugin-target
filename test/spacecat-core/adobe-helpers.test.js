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
const config = require('@adobe/aio-cli-config')
const { isEmpty, getApiKey, getAccessToken } = require('../../src/spacecat-core/adobe-helpers')

beforeEach(() => {
  jest.clearAllMocks()
})

test('isEmpty', () => {
  expect(isEmpty(null)).toEqual(true)
  expect(isEmpty(undefined)).toEqual(true)
  expect(isEmpty('')).toEqual(true)
  expect(isEmpty('spacecat')).toEqual(false)
})

test('getApiKey', () => {
  config.get.mockImplementation(() => null)
  expect(function testApiKey () { getApiKey() }).toThrow(new Error('missing config data: jwt-auth'))
  config.get.mockImplementation(() => { return {} })
  expect(function testApiKey () { getApiKey() }).toThrow(new Error('missing config data: jwt-auth.client_id'))
  config.get.mockImplementation(() => {
    return {
      'client_id': ''
    }
  })
  expect(function testApiKey () { getApiKey() }).toThrow(new Error('missing config data: jwt-auth.client_id'))
  config.get.mockImplementation(() => {
    return {
      'client_id': 'spacecat'
    }
  })
  expect(getApiKey()).toEqual('spacecat')
})

test('getAccessToken', () => {
  config.get.mockImplementation(() => null)
  expect(function testAccessToken () { getAccessToken() }).toThrow(new Error('missing config data: jwt-auth'))
  config.get.mockImplementation(() => { return {} })
  expect(function testAccessToken () { getAccessToken() }).toThrow(new Error('missing config data: jwt-auth.access_token'))
  config.get.mockImplementation(() => {
    return {
      'access_token': ''
    }
  })
  expect(function testAccessToken () { getAccessToken() }).toThrow(new Error('missing config data: jwt-auth.access_token'))
  config.get.mockImplementation(() => {
    return {
      'access_token': 'spacecat'
    }
  })
  expect(getAccessToken()).toEqual('spacecat')
})
