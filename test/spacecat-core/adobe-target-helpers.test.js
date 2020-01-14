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
const { isValidOfferName, isValidOfferContent, isValidWorkspace, getTenantName } = require('../../src/spacecat-core/adobe-target-helpers')

beforeEach(() => {
  jest.clearAllMocks()
})

test('isValidOfferName', () => {
  expect(isValidOfferName(null)).toEqual(false)
  expect(isValidOfferName(undefined)).toEqual(false)
  expect(isValidOfferName('')).toEqual(false)
  expect(isValidOfferName('spacecat')).toEqual(true)
  expect(isValidOfferName('spacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatsp')).toEqual(true)
  expect(isValidOfferName('spacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspa')).toEqual(false)
})

test('isValidOfferContent', () => {
  expect(isValidOfferContent(null)).toEqual(false)
  expect(isValidOfferContent(undefined)).toEqual(false)
  expect(isValidOfferContent('')).toEqual(false)
  expect(isValidOfferContent('spacecat')).toEqual(true)
})

test('isValidWorkspace', () => {
  expect(isValidWorkspace(null)).toEqual(true)
  expect(isValidWorkspace(undefined)).toEqual(true)
  expect(isValidWorkspace('')).toEqual(true)
  expect(isValidWorkspace('spacecat')).toEqual(true)
  expect(isValidOfferName('spacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatsp')).toEqual(true)
  expect(isValidOfferName('spacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspacecatspa')).toEqual(false)
})

test('getTenantName', () => {
  config.get.mockImplementation(() => null)
  expect(function testTenantName () { getTenantName() }).toThrow(new Error('missing config data: target'))
  config.get.mockImplementation(() => { return {} })
  expect(function testTenantName () { getTenantName() }).toThrow(new Error('missing config data: target.tenantName'))
  config.get.mockImplementation(() => {
    return {
      tenantName: ''
    }
  })
  expect(function testTenantName () { getTenantName() }).toThrow(new Error('missing config data: target.tenantName'))
  config.get.mockImplementation(() => {
    return {
      tenantName: 'spacecat'
    }
  })
  expect(getTenantName()).toEqual('spacecat')
})
