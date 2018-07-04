import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LookupsProvider } from '../../providers/api/lookups';

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html'
})
export class ContactUsPage {
  contactUsForm: FormGroup;
  countryCode: string = 'US';
  countries: any;
  states: any;
  districts: any;
  schools: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lookupsProvider: LookupsProvider,
    private formBuilder: FormBuilder
  ) {
    this.contactUsForm = this.formBuilder.group({
      username: ['', Validators.required],
      emailUsername: ['', Validators.compose([Validators.required])]
    });
    this.loadInitialData();
  }

  getStates(countryCode: string) {
    let countryId = this.countries.find(x => x.code == countryCode).id;
    this.lookupsProvider.getStates(countryId).subscribe(states => {
      this.states = states;
    });
  }

  getDistricts(stateCode: string) {
    let stateId = this.states.find(x => x.code == stateCode).id;
    this.lookupsProvider.getSchoolDistricts(stateId).subscribe(districts => {
      this.districts = districts;
    });
  }

  getSchools(districtCode: string) {
    let districtId = this.districts.find(x => x.code == districtCode).id;
    this.lookupsProvider.getSchools(districtId).subscribe(schools => {
      this.schools = schools;
    });
  }

  loadInitialData() {
    this.getCountries();
  }

  getCountries() {
    this.lookupsProvider.getCountries().subscribe(countries => {
      this.countries = countries;
      this.getStates(this.countryCode);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  verifyInformation() {
    console.log('Verify information');
  }
}
