import { Component, OnInit } from '@angular/core';
import { ManagerListItem } from '../models/manager-list-item';
import { ManagerService } from '../services/manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-subordinates-list.component.html',
  styleUrls: ['./manager-subordinates-list.component.css']
})
export class ManagerSubordinatesListComponent implements OnInit {
  managers: ManagerListItem[];
  boosManagerId: number;

  constructor(
    private route: ActivatedRoute,
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p=>{
      this.boosManagerId = p['id'];
    })
    this.managerService.getManagerSubordinates(this.boosManagerId).subscribe(m => this.managers = m);
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
