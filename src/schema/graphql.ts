
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

import { createPlayList } from "src/input/createPlayList.input";

/* tslint:disable */
/* eslint-disable */
export class CreateActorInput {
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

export class Artist {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    imgUrl?: Nullable<string>;
    coverImgUrl?: Nullable<string>;
    Followers?: Nullable<number>;
}

export abstract class IQuery {
    abstract getArtists(): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;

    abstract getArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract getArtistsCount(): number | Promise<number>;

    abstract getPlayLists(pagination?: Nullable<Pagination>): Nullable<Nullable<PlayList>[]> | Promise<Nullable<Nullable<PlayList>[]>>;

    abstract getPlayList(id: string): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract getPlayListsCount(): number | Promise<number>;
}

export abstract class IMutation {
    abstract createActor(input?: Nullable<CreateActorInput>): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract createPlayList(input?: Nullable<createPlayList>): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract updatePlayList(id: string, input: UpdatePlayListInput): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract deletePlayList(id: string): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract FollowPlayList(id: string): Nullable<PlayList> | Promise<Nullable<PlayList>>;
}

export class PlayList {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    imgUrl?: Nullable<string>;
    coverImgUrl?: Nullable<string>;
    Followers?: Nullable<number>;
}

type Nullable<T> = T | null;
