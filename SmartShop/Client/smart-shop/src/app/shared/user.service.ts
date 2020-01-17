import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BucketService } from './bucket.service';
import { Product } from '../models/Product';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    private currentUser: User;

    constructor(private bucket: BucketService) {

    }

    isUserAuthorized(): boolean{
      return true;
    }
  }
