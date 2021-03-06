import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { AccountService } from '../Service/account.service';

import '@capacitor-community/http';
@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	regform = this.fb.group({});
	fieldTextType: boolean;
	public subscription: any;
	loader: any;
	constructor(private accountService: AccountService, private router: Router,
		private alertCtrl: AlertController, private fb: FormBuilder,
		private platform: Platform,
		// private nativeHttp: HTTP,
		private loadingCtrl: LoadingController,
		private plt: Platform) { }

	ngOnInit() {
		this.regform = this.fb.group({
			email: ["", Validators.compose([Validators.required, Validators.email])],
			password: ["", Validators.required]
		})
	}
	signIn() {
		let email = this.regform.get("email").value;
		let password = this.regform.get("password").value;
		if (this.regform.valid) {
			this.accountService.getAllAccount().subscribe(async res => {
				//console.log(result)
				let result = await res.filter(c => c.email == email && c.password == password);
				if (result.length > 0) {
					localStorage.setItem("userId", (result[0].id).toString());
					localStorage.setItem("fullName", result[0].fullName);
					localStorage.setItem("roleType", result[0].type);
					localStorage.setItem('active', result[0].active);
					if (result[0].type == "driver") {
						if (result[0].active == "true") {
							this.presentAlert("Login successfully.");
							this.router.navigate(['/menu/driver-home']);
							this.regform.reset();
						}
						else {
							this.presentAlert("Please contact your system administrator")
						}
					}
					else {
						this.presentAlert("Please enter correct username and password!!");
					}
				}
				else {
					this.presentAlert("Please enter correct username and password!!");
				}
			}, async (err) => {
				await this.loader.dismiss().then();
				console.log(err);
			})
		}
		else {
			this.errorAlert();
		}
	}
	ionViewDidEnter() {
		this.subscription = this.platform.backButton.subscribe(() => {
			navigator['app'].exitApp();
		});
	}

	ionViewWillLeave() {
		this.subscription.unsubscribe();
	}
	async presentAlert(message) {
		const alert = await this.alertCtrl.create({
			cssClass: 'my-custom-class',
			header: 'Login',
			message: message,
			buttons: ['OK']
		});
		await alert.present();
	}
	async errorAlert() {
		const alert = await this.alertCtrl.create({
			cssClass: 'my-custom-class',
			header: 'Login',
			message: 'Please Enter All field.',
			buttons: ['OK']
		});
		await alert.present();
	}
	toggleFieldTextType() {
		this.fieldTextType = !this.fieldTextType;
	}
	register() {
		this.router.navigate(["/signup"]);
	}

}
