import { Component, inject, input, OnInit } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-video-embed',
  standalone: false,

  templateUrl: './video-embed.component.html',
  styleUrl: './video-embed.component.scss',
})
export class VideoEmbedComponent implements OnInit {
  videoKey = input<string | null>(null)

  // Building a safe URL for the videos using the DOMSanitizer Service
  domSanitizer = inject(DomSanitizer)
  safeVideoUrl: SafeResourceUrl = ''

  ngOnInit(): void {
    this.safeVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoKey()}`
    )
  }
}
