import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface AsideModel {
  title: string;
  router: string;
}

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  asideList: AsideModel[] = [
    {
      title: 'onPush 策略',
      router: 'onPush',
    },
    {
      title: 'form 表单',
      router: 'form',
    },
    {
      title: 'DI 实战',
      router: 'di',
    },
  ];

  constructor(private activateRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  jumpRouter(model: AsideModel) {
    this.router.navigate([model.router], { relativeTo: this.activateRoute });
  }
}
