import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Event Binding Example';
  count = 0;
  allowRestart = false;
  constructor() { 
  }

  ngOnInit() {
    console.log(this.title);
    
      setTimeout(()=>{                           //<<<---using ()=> syntax
        this.countFn(this.count + 1)
      }, 1000);
    
  }

  countFn (count: any): any {
    this.count = count;
    console.log(count);
    if(count < 10) {
      setTimeout(()=>{                           //<<<---using ()=> syntax
        this.countFn(this.count + 1)
      }, 1000);
    } else {
      this.allowRestart = true;
    }
  }

  restart() {
    this.allowRestart = false;
    this.count = 0;
    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.countFn(this.count + 1)
    }, 1000);
  }
}
