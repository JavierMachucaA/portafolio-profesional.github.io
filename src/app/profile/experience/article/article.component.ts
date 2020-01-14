import { Component, OnInit, Input } from '@angular/core';
import { ArticleDto } from '../../structure/DTO/article.dto';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: ArticleDto;

  constructor() { }

  ngOnInit() {
  }

}
