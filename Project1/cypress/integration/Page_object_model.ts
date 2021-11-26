/// <reference types = "cypress" />
import {loginPage} from "../Pages/login_page"

const LoginPage = new loginPage

it('login test',function(){
    LoginPage.navigate();
    LoginPage.enterUsername('test');
    LoginPage.enterPassword('test');
})