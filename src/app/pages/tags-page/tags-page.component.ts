import { Component, OnInit } from '@angular/core';
import {TagsService} from '../../store/tags/tags.service';
import {Observable} from 'rxjs';
import {TagInterface} from '../../interfaces/tag.interface';
import {FormService} from '../../services/form/form.service';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.scss']
})
export class TagsPageComponent implements OnInit {
  tags$: Observable<TagInterface[]>;
  constructor(private readonly tagsService: TagsService, private readonly formService: FormService) {
    this.tags$ = this.tagsService.tags$;
  }

  ngOnInit(): void {
    this.tagsService.getAllTags();
  }

  openForm(tag: TagInterface | null = null) {
    this.formService.openTagForm({tag});
  }
}
