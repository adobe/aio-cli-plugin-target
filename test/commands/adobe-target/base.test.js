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
const BaseCommand = require('../../../src/commands/adobe-target/base')

beforeEach(() => {
  jest.clearAllMocks()
})

test('getAdobeTarget', () => {
  config.get.mockImplementation(() => null)
  expect(function testGetAdobeTarget () { new BaseCommand().getAdobeTarget() }).toThrow(new Error('missing config data: target'))
  config.get.mockImplementation(() => { return {} })
  expect(function testGetAdobeTarget () { new BaseCommand().getAdobeTarget() }).toThrow(new Error('missing config data: target.tenantName'))
  config.get.mockImplementation(() => {
    return {
      tenantName: 'spacecat-tenantName'
    }
  })
  expect(function testGetAdobeTarget () { new BaseCommand().getAdobeTarget() }).toThrow(new Error('missing config data: jwt-auth.access_token'))
  config.get.mockImplementation(() => {
    return {
      tenantName: 'spacecat-tenantName',
      access_token: 'spacecat-accessToken'
    }
  })
  expect(function testGetAdobeTarget () { new BaseCommand().getAdobeTarget() }).toThrow(new Error('missing config data: jwt-auth.client_id'))
  config.get.mockImplementation(() => {
    return {
      tenantName: 'spacecat-tenantName',
      access_token: 'spacecat-accessToken',
      client_id: 'spacecat-clientId'
    }
  })
  expect(new BaseCommand().getAdobeTarget()).toBeTruthy()
})
