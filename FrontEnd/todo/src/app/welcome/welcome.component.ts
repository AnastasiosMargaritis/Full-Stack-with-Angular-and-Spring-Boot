import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  
  name = ''

  welcomeMessageFromService:string
   

  constructor(private route: ActivatedRoute, 
    private service: WelcomeDataService) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage()
  {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error));
  } 

  getWelcomeMessageWithParameter()
  {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfullResponse(response)
  {
    this.welcomeMessageFromService = response.something
  }

  handleErrorResponse(error)
  {
    this.welcomeMessageFromService = error.error.message  
  }
}
