
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

// import { createPlayList } from "src/playList/input/createPlayList.input";§

/* tslint:disable */
/* eslint-disable */
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

export abstract class IQuery {
    abstract getPlayLists(): Nullable<Nullable<PlayList>[]> | Promise<Nullable<Nullable<PlayList>[]>>;

    abstract getPlayList(id: string): Nullable<PlayList> | Promise<Nullable<PlayList>>;
}

export class PlayList {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    imgUrl?: Nullable<string>;
    coverImgUrl?: Nullable<string>;
    Followers?: Nullable<number>;
}

export abstract class IMutation {
    abstract createPlayList(input?: Nullable<CreatePlayList>): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract updatePlayList(id: string, input: UpdatePlayListInput): Nullable<PlayList> | Promise<Nullable<PlayList>>;

    abstract deletePlayList(id: string): Nullable<PlayList> | Promise<Nullable<PlayList>>;
}

type Nullable<T> = T | null;
