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
const { cli } = require('cli-ux')

class UpdateOfferCommand extends BaseCommand {
  async run () {
    const { args } = this.parse(UpdateOfferCommand)
    let result

    try {
      result = await this.updateOffer(args.offerId, args.offerName, args.offerContent)
    } catch (error) {
      this.error(error.message)
    }

    cli.info('The following offer has been successfully updated')
    cli.styledObject(result, ['id', 'name', 'content', 'modifiedAt', 'workspace'])
    return result
  }

  async updateOffer (id, name, content) {
    return this.getAdobeTarget().updateOffer(id, name, content)
  }
}

UpdateOfferCommand.description = 'Updates the content offer referenced by the id specified in the URL.'

UpdateOfferCommand.args = [
  { name: 'offerId', required: true, description: 'The identifier of the offer. The id cannot be empty.' },
  { name: 'offerName', required: true, description: 'A string to identify the Offer. The name cannot be empty. Max length is 250 characters.' },
  { name: 'offerContent', required: true, description: 'Content of an Offer shown to user.' }
]

module.exports = UpdateOfferCommand
