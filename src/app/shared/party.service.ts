import { Injectable } from '@angular/core';
import { Party } from './Party.model';

@Injectable()
export class PartyService {

  constructor() { }
  getParty(): Promise<Party[]>{
    return Promise.resolve(PARTYDATA);
  }

}

const PARTYDATA: Party[]=[
  {code: 'BNE', name: 'Beneficiary', available_with: false, drafts_on: false, imlc: true, imco:false, imgu:true, exlc: true, exco: false, exgu: true},
  {code: 'ADV', name: 'Advising Bank', available_with: true, drafts_on: true, imlc: true, imco:false, imgu:true, exlc: true, exco: false, exgu: true},
  {code: 'ISB', name: 'Issuing Bank', available_with: true, drafts_on: true, imlc: true, imco:false, imgu:true, exlc: true, exco: false, exgu: true},
  {code: 'NEG', name: 'Negotiating Bank', available_with: true, drafts_on: true, imlc: true, imco:false, imgu:true, exlc: true, exco: false, exgu: true},
  {code: 'CON', name: 'Confirming Bank', available_with: true, drafts_on: true, imlc: true, imco:false, imgu:true, exlc: true, exco: false, exgu: true},
  {code: 'RMB', name: 'Reimbursing Bank', available_with: false, drafts_on: true, imlc: true, imco:false, imgu:true, exlc: true, exco: false, exgu: true},
  {code: 'ANY', name: 'Any Bank', available_with: true, drafts_on: true, imlc: true, imco:false, imgu:true, exlc: true, exco: false, exgu: true},
]
