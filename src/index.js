'use strict'

import Handlebars from 'handlebars'
import addressHelper from './helpers/addressHelper'
import compareHelper from './helpers/compareHelper'
import contactHelper from './helpers/contactHelper'
import dateOfBirthStringHelper from './helpers/dateOfBirthStringHelper'
import emailAddressHelper from './helpers/emailAddressHelper'
import filterHelper from './helpers/filterHelper'
import formatMoneyHelper from './helpers/formatMoneyHelper'
import fullNameHelper from './helpers/fullNameHelper'
import genderHelper from './helpers/genderHelper'
import groupNameRelationshipHelper from './helpers/groupNameRelationshipHelper'
import lowerCaseHelper from './helpers/lowerCaseHelper'
import majorNumberEndSectionHelper from './helpers/majorNumberEndSectionHelper'
import majorNumberHelper from './helpers/majorNumberHelper'
import minorNumberEndSectionHelper from './helpers/minorNumberEndSectionHelper'
import minorNumberHelper from './helpers/minorNumberHelper'
import numberToMoneyWordsHelper from './helpers/numberToMoneyWordsHelper'
import numberToWordsHelper from './helpers/numberToWordsHelper'
import pageBreakHelper from './helpers/pageBreakHelper'
import phoneNumberHelper from './helpers/phoneNumberHelper'
import subMinorNumberHelper from './helpers/subMinorNumberHelper'
import subMinorNumberEndSectionHelper from './helpers/subMinorNumberEndSectionHelper'
import titleCaseHelper from './helpers/titleCaseHelper'
import titleNumberHelper from './helpers/titleNumberHelper'
import underlineHelper from './helpers/underlineHelper'
import upperCaseFirstHelper from './helpers/upperCaseFirstHelper'
import upperCaseHelper from './helpers/upperCaseHelper'

export default (source, context) => {
  let titleNumber = [0, 0, 0]

  const getTitleNumber = () => titleNumber
  const setTitleNumber = updatedTitleNumber => { titleNumber = updatedTitleNumber }

  Handlebars.registerHelper('titleNum', titleNumberHelper(getTitleNumber))
  Handlebars.registerHelper('majorNum', majorNumberHelper({ getTitleNumber, setTitleNumber }))
  Handlebars.registerHelper('minorNum', minorNumberHelper({ getTitleNumber, setTitleNumber }))
  Handlebars.registerHelper('subMinorNum', subMinorNumberHelper({ getTitleNumber, setTitleNumber }))
  Handlebars.registerHelper('majorNumberEndSection', majorNumberEndSectionHelper({ getTitleNumber }))
  Handlebars.registerHelper('minorNumberEndSection', minorNumberEndSectionHelper({ getTitleNumber }))
  Handlebars.registerHelper('subMinorNumberEndSection', subMinorNumberEndSectionHelper({ getTitleNumber }))
  Handlebars.registerHelper('pageBreak', pageBreakHelper)
  Handlebars.registerHelper('compare', compareHelper)
  Handlebars.registerHelper('filter', filterHelper)
  Handlebars.registerHelper('numToWords', numberToWordsHelper)
  Handlebars.registerHelper('numToMoneyWords', numberToMoneyWordsHelper)
  Handlebars.registerHelper('formatMoney', formatMoneyHelper)
  Handlebars.registerHelper('uppercasefirst', upperCaseFirstHelper)
  Handlebars.registerHelper('titlecase', titleCaseHelper)
  Handlebars.registerHelper('uppercase', upperCaseHelper)
  Handlebars.registerHelper('lowercase', lowerCaseHelper)
  Handlebars.registerHelper('underline', underlineHelper)
  Handlebars.registerHelper('groupNameRelationship', groupNameRelationshipHelper)
  Handlebars.registerHelper('contact', contactHelper)
  Handlebars.registerHelper('address', addressHelper)
  Handlebars.registerHelper('dateOfBirthString', dateOfBirthStringHelper)
  Handlebars.registerHelper('emailAddress', emailAddressHelper)
  Handlebars.registerHelper('fullName', fullNameHelper)
  Handlebars.registerHelper('gender', genderHelper)
  Handlebars.registerHelper('phoneNumber', phoneNumberHelper)

  return Handlebars.compile(source)(context)
}
