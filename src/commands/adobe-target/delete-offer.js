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

class DeleteOfferCommand extends BaseCommand {
  async run () {
    const { args } = this.parse(DeleteOfferCommand)
    let result

    try {
      result = await this.deleteOffer(args.offerId)
    } catch (error) {
      this.error(error.message)
    }

    cli.info('The following offer has been successfully deleted')
    cli.styledObject(result, ['id', 'name', 'content', 'modifiedAt', 'workspace'])
    return result
  }

  async deleteOffer (id) {
    return this.getAdobeTarget().deleteOffer(id)
  }
}

DeleteOfferCommand.description = 'Updates the content offer referenced by the id specified in the URL.'

DeleteOfferCommand.args = [
  { name: 'offerId', required: true, description: 'The identifier of the offer. The id cannot be empty.' }
]

module.exports = DeleteOfferCommand
