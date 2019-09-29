import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HiveSectionService } from '../services/hive-section.service';
import { HiveSection } from '../models/hive-section';

@Component({
  selector: 'app-hive-section-form',
  templateUrl: './hive-section-form.component.html',
  styleUrls: ['./hive-section-form.component.css']
})
export class HiveSectionFormComponent implements OnInit {

  hiveSection = new HiveSection(0, "", "", false, "", 0);
  hiveId: number;
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hiveSectionService: HiveSectionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.hiveId = p["hiveId"];
      this.hiveSection.storeHiveId = this.hiveId;
      if (p['id'] === undefined)
        return;
      this.hiveSectionService.getHiveSection(p['id']).subscribe(h => this.hiveSection = h);
      this.existed = true;
    });
  }

  navigateToSections() {
    this.router.navigateByUrl(`hive/${this.hiveId}/sections`);
  }

  onCancel() {
    this.navigateToSections();
  }

  onSubmit() {
    if (this.existed) {
      this.hiveSection.storeHiveId = this.hiveId;
      this.hiveSectionService.updateHiveSecion(this.hiveSection).subscribe(h => this.navigateToSections());
    } else {
      this.hiveSectionService.addHiveSection(this.hiveSection).subscribe(h => this.navigateToSections());
    }
  }

  onDelete() {
    if (this.hiveSection) {
      this.hiveSectionService.setHiveSectionStatus(this.hiveSection.id, true).subscribe(c => this.hiveSection.isDeleted = true);
    }
  }

  onUndelete() {
    if (this.hiveSection) {
      this.hiveSectionService.setHiveSectionStatus(this.hiveSection.id, false).subscribe(c => this.hiveSection.isDeleted = false);
    }
  }

  onPurge() {
    if (this.hiveSection) {
      this.hiveSectionService.deleteHiveSection(this.hiveSection.id).subscribe(h => this.navigateToSections());
    }
  }

}
