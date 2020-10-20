import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {


  isRefreshAllowed = false;
  serverRefreshStatus = 'Server was not refreshed!';
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    setTimeout(() => {
      this.isRefreshAllowed = true;
    }, 3000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onServerRefresh() {
    this.serverRefreshStatus = 'Server Refreshed!';
  }


  ngOnInit(): void {
  }

}
