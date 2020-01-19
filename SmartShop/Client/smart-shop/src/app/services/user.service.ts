import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/Product';
import { BucketService } from './bucket.service';

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
