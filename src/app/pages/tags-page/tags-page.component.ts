import { Component, OnInit } from '@angular/core';
import {TagsService} from '../../store/tags/tags.service';
import {Observable} from 'rxjs';
import {TagInterface} from '../../interfaces/tag.interface';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.scss']
})
export class TagsPageComponent implements OnInit {
  tags$: Observable<TagInterface[]>;
  constructor(private readonly tagsService: TagsService) {
    this.tags$ = this.tagsService.tags$;
  }

  ngOnInit(): void {
    this.tagsService.getAllTags();
  }
}
