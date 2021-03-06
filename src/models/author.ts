import bindthis from "@/decorators/bindthis";

export type TrackFieldTypes = 'vocal' | 'original' | 'composer' | 'arrange' | 'lyrics' | 'pv';

export interface ITrackAuthor {
  vocal?: string;
  original?: string;
  composer?: string;
  arrange?: string;
  lyrics?: string;
  pv?: string;
  illustrator?: string;

  merge: (...args: TrackFieldTypes[]) => string;
}
export interface IHasAuthor {
  author: ITrackAuthor;
}

export default class TrackAuthorModel implements ITrackAuthor{
  public vocal: string;
  public original: string;
  public composer: string;
  public arrange: string;
  public lyrics: string;
  public pv: string;
  public illustrator: string;
  constructor(params: any) {
    ({
      vocal: this.vocal = '',
      original: this.original = '',
      composer: this.composer = '',
      arrange: this.arrange = '',
      lyrics: this.lyrics = '',
      pv: this.pv = '',
      illustrator: this.illustrator = ''
    } = params);
  }

  @bindthis public merge(field1: TrackFieldTypes, field2: TrackFieldTypes): string {
    if (this[field1] === '' && this[field2] === '') return '';
    else if (this[field1] === '') return this[field2];
    else if (this[field2] === '') return this[field1];
    return `${this[field1]} | ${this[field2]}`;
  }
}

