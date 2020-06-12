<!--
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-target/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-target/) 



# aio-cli-plugin-target
Adobe Target Plugin for the [Adobe I/O CLI](https://github.com/adobe/aio-cli)
<!-- toc -->
* [aio-cli-plugin-target](#aio-cli-plugin-target)
* [Configuration](#configuration)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Configuration
<!-- configuration -->

Setup the configuration according to https://github.com/adobe/aio-lib-core-config/. The configuration must define the following data:

```sh-session
{
  "target": {
    "tenantName": "<Your IMS Org Id>
  },
  "jwt-auth": {
    "client_id": "<Your integration API key",
    "client_secret": "<Your integration client secret>",
    "jwt_payload": {
      "<Your integration JWT payload>"
    },
    "jwt_private_key": [
      "-----BEGIN PRIVATE KEY-----",
      "<Your integration private key",
      "On Multiple Lines>",,
      "-----END PRIVATE KEY-----",
      ""
    ]
  }
}
```
<!-- configurationstop -->

# Usage
```sh-session
$ aio plugins:install -g @adobe/aio-cli-plugin-target
$ # OR
$ aio discover -i
$ aio target --help
```

# Commands
<!-- commands -->

Retrieves the list of previously-created content offers. The flags are optional and are used to indicate the sorting and filtering options.

```
USAGE
  $ aio adobe-target:list-offers

OPTIONS
  -l, --limit=limit  Defines the number of items to return. Default value is 2147483647.
  -o, --offset=offset  Defines the first offer to return from the list of total offers. Used in conjunction with limit, you can provide pagination in your application for users to browse through a large set of offers.
  -s, --sortBy=sortBy  Defines the sorting criteria on the returned items. You can add a “-” modifier to sort by descending order.

EXAMPLES
  $ aio adobe-target:list-offers
  $ aio adobe-target:list-offers -l=10 -o=0 -s=id
  $ aio adobe-target:list-offers --limit=5 --offset=3 --sortBy=-name
```

_See code: [src/commands/adobe-target/list-offers.js](./src/commands/adobe-target/list-offers.js)_

## `aio adobe-target:get-offer IDENTIFIER`

Retrieves the contents of an offer given an offer id.

```
USAGE
  $ aio adobe-target:get-offer IDENTIFIER

ARGUMENTS
  IDENTIFIER  The offer id

```

_See code: [src/commands/adobe-target/get-offer.js](./src/commands/adobe-target/get-offer.js)_


## `aio adobe-target:create-offer NAME CONTENT`

Creates a new content offer as defined by the request data.

```
USAGE
  $ aio adobe-target:create-offer NAME CONTENT -w=WORKSPACE

ARGUMENTS
  NAME  A string to identify the Offer. The name cannot be empty. Max length is 250 characters.
  CONTENT  Content of an Offer shown to user.

OPTIONS
  -w, --workspace=workspace  String Optional id of workspace to which the activity belongs. Max length is 250 characters. By default, Default workspace is assumed. Applicable for Enterprise Permissions (Target Premium).

```

_See code: [src/commands/adobe-target/create-offer.js](./src/commands/adobe-target/create-offer.js)_

## `aio adobe-target:update-offer IDENTIFIER NAME CONTENT`

Updates the content offer referenced by the id specified in the URL.

```
USAGE
  $ aio adobe-target:update-offer IDENTIFIER NAME CONTENT

ARGUMENTSS
  IDENTIFIER  The identifier of the offer. The id cannot be empty.
  NAME  A string to identify the Offer. The name cannot be empty. Max length is 250 characters.
  CONTENT  Content of an Offer shown to user.

```

_See code: [src/commands/adobe-target/update-offer.js](./src/commands/adobe-target/update-offer.js)_

## `aio adobe-target:delete-offer IDENTIFIER`

Updates the content offer referenced by the id specified in the URL.

```
USAGE
  $ aio adobe-target:delete-offer IDENTIFIER

ARGUMENTS
  IDENTIFIER  The identifier of the offer. The id cannot be empty.

```

_See code: [src/commands/adobe-target/delete-offer.js](./src/commands/adobe-target/delete-offer.js)_
<!-- commandsstop -->
