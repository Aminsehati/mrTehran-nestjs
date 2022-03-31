
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateArtistInput {
    name?: Nullable<string>;
    imgUrl?: Nullable<string>;
    coverImgUrl?: Nullable<string>;
}

export class UpdateArtistInput {
    name?: Nullable<string>;
    imgUrl?: Nullable<string>;
    coverImgUrl?: Nullable<string>;
}

export class Pagination {
    limit?: Nullable<number>;
    skip?: Nullable<number>;
}

export class UpdatePlayListInput {
    name: string;
    imgUrl: string;
    coverImgUrl: string;
}

export class CreatePlayList {
    name?: Nullable<string>;
    imgUrl?: Nullable<string>;
    coverImgUrl?: Nullable<string>;
}

export class CreateTrackInput {
    imgUrl: string;
    audioUrl: string;
    trackName: string;
    artists?: Nullable<string[]>;
}

export class UpdateTrackInput {
    imgUrl: string;
    audioUrl: string;
    trackName: string;
    view: number;
    like: number;
    artists?: Nullable<string[]>;
}

export class Artist {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    imgUrl?: Nullable<string>;
    coverImgUrl?: Nullable<string>;
    Followers?: Nullable<number>;
}

export abstract class IQuery {
    abstract getArtists(pagination?: Nullable<Pagination>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;

    abstract getArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract getArtistsCount(): number | Promise<number>;

    abstract getPlayLists(pagination?: Nullable<Pagination>): Nullable<Nullable<PlayList>[]> | Promise<Nullable<Nullable<PlayList>[]>>;

    abstract getPlayList(id: string): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract getPlayListsCount(): number | Promise<number>;

    abstract getTracks(): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
}

export abstract class IMutation {
    abstract createArtist(input: CreateArtistInput): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract updateArtist(id: string, input: UpdateArtistInput): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract deleteArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract FollowArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract createPlayList(input?: Nullable<CreatePlayList>): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract updatePlayList(id: string, input: UpdatePlayListInput): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract deletePlayList(id: string): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract FollowPlayList(id: string): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract createTrack(input: CreateTrackInput): Nullable<Track> | Promise<Nullable<Track>>;

    abstract updateTrack(input?: Nullable<UpdateTrackInput>): Nullable<Track> | Promise<Nullable<Track>>;

    abstract deleteTrack(id: string): Nullable<Track> | Promise<Nullable<Track>>;

    abstract uploadImage(file?: Nullable<Upload>): Nullable<FileItem> | Promise<Nullable<FileItem>>;

    abstract uploadAudio(file?: Nullable<Upload>): Nullable<FileItem> | Promise<Nullable<FileItem>>;
}

export class PlayList {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    imgUrl?: Nullable<string>;
    coverImgUrl?: Nullable<string>;
    Followers?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Track {
    _id?: Nullable<string>;
    imgUrl?: Nullable<string>;
    audioUrl?: Nullable<string>;
    trackName?: Nullable<string>;
    view?: Nullable<number>;
    like?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
}

export class FileItem {
    url?: Nullable<string>;
}

export type DateTime = any;
export type Upload = any;
type Nullable<T> = T | null;
