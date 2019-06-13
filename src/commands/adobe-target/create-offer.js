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
const BaseCommand = require('./base')
const { flags } = require('@oclif/command')
const { cli } = require('cli-ux')

class CreateOfferCommand extends BaseCommand {
  async run () {
    const { args, flags } = this.parse(CreateOfferCommand)
    let result

    try {
      result = await this.createOffer(args.offerName, args.offerContent, flags.workspace)
    } catch (error) {
      this.error(error.message)
    }

    cli.info('The following offer has been successfully created')
    cli.styledObject(result, ['id', 'name', 'content', 'modifiedAt', 'workspace'])
    return result
  }

  async createOffer (name, content, workspace = null) {
    return this.getAdobeTarget().createOffer(name, content, workspace)
  }
}

CreateOfferCommand.description = 'Creates a new content offer as defined by the request data.'

CreateOfferCommand.args = [
  { name: 'offerName', required: true, description: 'A string to identify the Offer. The name cannot be empty. Max length is 250 characters.' },
  { name: 'offerContent', required: true, description: 'Content of an Offer shown to user.' }
]

CreateOfferCommand.flags = {
  workspace: flags.string({ char: 'w', description: 'String Optional id of workspace to which the activity belongs. Max length is 250 characters. By default, Default workspace is assumed. Applicable for Enterprise Permissions (Target Premium).' })
}

module.exports = CreateOfferCommand
