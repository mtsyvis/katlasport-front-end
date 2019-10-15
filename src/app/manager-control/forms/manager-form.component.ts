import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from '../services/manager.service';
import { Manager } from '../models/manager';

@Component({
  selector: 'app-manager-form-component',
  templateUrl: './manager-form.component.html',
  styleUrls: ['./manager-form.component.css']
})
export class ManagerFormComponent implements OnInit {
  existed = false;
  bossManagers: Manager[];
  manager = new Manager(0, "", "", 0, false, "");
  selectedImageFile: File;
  curentManagerId: number;
  selectedBossId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.managerService.getBossMamagers().subscribe(m => this.bossManagers = m);
    this.route.params.subscribe(p => {
      if (p['id'] === undefined)
        return;
      this.existed = true;
      this.managerService.getManager(p['id']).subscribe(h => this.manager = h);
    });
    //this.deleteCurrentManager();
  }

  onFileSelected(event) {
    this.selectedImageFile = event.target.files[0];
  }

  deleteCurrentManager() {
    this.curentManagerId = this.bossManagers.findIndex(m => m.id == this.manager.id);
    this.bossManagers.splice(this.curentManagerId);
  }

  navigateToManagers() {
    this.router.navigate(['/managers']);
  }

  onCancel() {
    this.navigateToManagers();
  }

  onSubmit() {
    if (this.selectedBossId) {
      this.manager.parentId = this.selectedBossId;
    }

    if (this.existed) {
      if (this.selectedImageFile) {
        this.managerService.uploadNewImageFile(this.manager.id, this.selectedImageFile).subscribe();
      }
      this.managerService.updateManager(this.manager).
        subscribe(s => this.navigateToManagers());

    } else {
      this.managerService.addManager(this.manager).subscribe(h => this.navigateToManagers());
    }
  }

  onDelete() {
    if (this.manager) {
      this.managerService.setManagerStatus(this.manager.id, true).subscribe(c => this.manager.isDeleted = true);
    }
  }

  onUndelete() {
    if (this.manager) {
      this.managerService.setManagerStatus(this.manager.id, false).subscribe(c => this.manager.isDeleted = false);
    }
  }

  onPurge() {
    if (this.manager) {
      this.managerService.deleteManager(this.manager.id).subscribe(h => this.navigateToManagers());
    }
  }

}
