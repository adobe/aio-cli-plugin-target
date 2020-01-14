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
const nodeFetch = jest.requireActual('node-fetch')
const fetchMock = require('fetch-mock').sandbox()
Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch
})
module.exports = fetchMock

function mockResponseWithMethod (url, method, response) {
  fetchMock.mock((u, opts) => u === url && opts.method === method, response)
}

mockResponseWithMethod('https://mc.adobe.io/spacecat-tenantName/target/offers/', 'GET', {
  total: 1120,
  offset: 0,
  limit: 5,
  offers: [
    {
      id: '391769',
      name: '/l1_a_b_test/experiences/0/pages/0/zones/0/1489440825492',
      type: 'content',
      modifiedAt: '2017-03-20T03:03:28Z',
      workspace: '1234567'
    },
    {
      id: '391902',
      name: '10OFF',
      type: 'content',
      modifiedAt: '2017-03-19T00:06:47Z',
      workspace: '1234567'
    },
    {
      id: '391903',
      name: 'SHIPFREE',
      type: 'content',
      modifiedAt: '2017-03-19T00:06:29Z',
      workspace: '1234567'
    },
    {
      id: '391904',
      name: '5OFF',
      type: 'content',
      modifiedAt: '2017-03-19T00:06:26Z',
      workspace: '1234567'
    },
    {
      id: '391905',
      name: '/a1_-_l4206a_-_ab/experiences/0/pages/0/zones/0/1489468580249',
      type: 'content',
      modifiedAt: '2017-06-30T19:48:38Z',
      workspace: '1234567'
    }
  ]
})
mockResponseWithMethod('https://mc.adobe.io/spacecat-tenantName/target/offers/?limit=3&offset=1&sortBy=-id', 'GET', {
  total: 3,
  offset: 1,
  limit: 3,
  offers: [
    {
      id: '391904',
      name: '5OFF',
      type: 'content',
      modifiedAt: '2017-03-19T00:06:26Z',
      workspace: '1234567'
    },
    {
      id: '391903',
      name: 'SHIPFREE',
      type: 'content',
      modifiedAt: '2017-03-19T00:06:29Z',
      workspace: '1234567'
    },
    {
      id: '391902',
      name: '10OFF',
      type: 'content',
      modifiedAt: '2017-03-19T00:06:47Z',
      workspace: '1234567'
    }
  ]
})
mockResponseWithMethod('https://mc.adobe.io/error-tenantName/target/offers/', 'GET', 404)
mockResponseWithMethod('https://mc.adobe.io/spacecat-tenantName/target/offers/content/391902', 'GET', {
  id: '391902',
  name: '10OFF',
  content: 'Use 10OFF for $10 off for orders over $100',
  modifiedAt: '2017-03-19T00:06:47Z',
  workspace: '1234567'
})
mockResponseWithMethod('https://mc.adobe.io/spacecat-tenantName/target/offers/content/123123', 'GET', 404)
mockResponseWithMethod('https://mc.adobe.io/spacecat-tenantName/target/offers/content/', 'POST', {
  id: '438180',
  name: 'My new offer',
  content: '<div>The content of the offer</div>',
  modifiedAt: '2017-07-10T20:46:53Z',
  workspace: '1234567'
})
mockResponseWithMethod('https://mc.adobe.io/error-tenantName/target/offers/content/', 'POST', 404)
mockResponseWithMethod('https://mc.adobe.io/spacecat-tenantName/target/offers/content/438180', 'PUT', {
  id: '438180',
  name: 'Your existing offer',
  content: '<div>Updated content</div>',
  modifiedAt: '2017-07-10T20:55:41Z'
})
mockResponseWithMethod('https://mc.adobe.io/spacecat-tenantName/target/offers/content/438181', 'PUT', 404)
mockResponseWithMethod('https://mc.adobe.io/spacecat-tenantName/target/offers/content/438180', 'DELETE', {
  id: '438180',
  name: 'Your existing offer',
  content: '<div>Updated content</div>',
  modifiedAt: '2017-07-10T20:55:41Z',
  workspace: '1234567'
})
mockResponseWithMethod('https://mc.adobe.io/spacecat-tenantName/target/offers/content/438181', 'DELETE', 404)
