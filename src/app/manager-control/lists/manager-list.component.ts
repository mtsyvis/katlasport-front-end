import { Component, OnInit } from '@angular/core';
import { ManagerListItem } from '../models/manager-list-item';
import { ManagerService } from '../services/manager.service';


@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {
  managers: ManagerListItem[];

  constructor(private managerService: ManagerService) { }

  ngOnInit() {
    this.managerService.getMamagers().subscribe(m=> this.managers = m);
  }

  onDelete(managerId: number) {
    var manager = this.managers.find(h => h.id == managerId);
    if (manager) {
      this.managerService.setManagerStatus(managerId, true).subscribe(c => manager.isDeleted = true);
    }
  }

  onRestore(managerId: number) {
    var manager = this.managers.find(h => h.id == managerId);
    if (manager) {
      this.managerService.setManagerStatus(managerId, true).subscribe(c => manager.isDeleted = false);
    }
  }
}
