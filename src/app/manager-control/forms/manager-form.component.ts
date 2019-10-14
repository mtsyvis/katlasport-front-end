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
  manager = new Manager(0, "", "", 0, false, "");
  selectedImageFile: File;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) return;
      this.managerService.getManager(p['id']).subscribe(h => this.manager = h);
      this.existed = true;
    });
  }

  onFileSelected(event){
    this.selectedImageFile = event.target.files[0];
  }

  onUpload(){
    
  }

  navigateToManagers() {
    this.router.navigate(['/managers']);
  }

  onCancel() {
    this.navigateToManagers();
  }

  onSubmit() {
    if (this.existed) {
      this.managerService.updateManager(this.manager);
      if(this.selectedImageFile){
        this.managerService.uploadNewImageFile(this.manager.id, this.selectedImageFile).subscribe(h => this.navigateToManagers());
      }
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
      this.managerService .setManagerStatus(this.manager.id, false).subscribe(c => this.manager.isDeleted = false);
    }
  }

  onPurge() {
    if (this.manager) {
      this.managerService.deleteManager(this.manager.id).subscribe(h => this.navigateToManagers());
    }
  }

}
