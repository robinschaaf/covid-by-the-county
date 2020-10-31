import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class AnimationService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Animation';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'animation/0', 'title': 'FadeIn Right', 'theme': 'layout1' },
      { 'url': 'animation/1', 'title': 'FadeIn Left', 'theme': 'layout2' },
      { 'url': 'animation/2', 'title': 'BounceIn', 'theme': 'layout3' },
      { 'url': 'animation/3', 'title': 'FadeInUp', 'theme': 'layout4' },
      { 'url': 'animation/4', 'title': 'ZoomIn', 'theme': 'layout5' },
      { 'url': 'animation/5', 'title': 'ZoomIn and FadeIn Left', 'theme': 'layout6' },
      { 'url': 'animation/6', 'title': 'BounceIn Right', 'theme': 'layout7' },
      { 'url': 'animation/7', 'title': 'BounceIn Left and BounceIn Left', 'theme': 'layout8' },
      { 'url': 'animation/8', 'title': 'SlideIn Up', 'theme': 'layout9' },
      { 'url': 'animation/9', 'title': 'SlideIn Left', 'theme': 'layout10' }

    ];
  }

  getDataForTheme = (menuItem: any): any => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  }

  //* Data Set for page 1
  getDataForLayout1 = (): any => {
    return {
      'toolbarTitle': 'FadeIn Right',
      'items':[
        {
            "id": 1,
            "title": "New York",
            "subtitle": "United States",
            "detail": "General Electric",
            "isChecked": true

        },
        {
            "id": 2,
            "title": "Maranello",
            "subtitle": "Italy",
            "detail": "Ferrari",
            "isChecked": false
        },
        {
            "id": 3,
            "title": "Boston",
            "subtitle": "United States",
            "detail": "Gillette",
            "isChecked": true
        },
        {
            "id": 4,
            "title": "Munich",
            "subtitle": "Germany",
            "detail": "Siemens AG",
            "isChecked": false
        },
        {
            "id": 5,
            "title": "Seul",
            "subtitle": "South Korea",
            "detail": "Hyundai",
            "isChecked": false
        },
        {
            "id": 6,
            "title": "Herzogenaurach",
            "subtitle": "Germany",
            "detail": "Adidas",
            "isChecked": true
        },
        {
            "id": 7,
            "title": "Redwood City",
            "subtitle": "United States",
            "detail": "Oracle Corporation",
            "isChecked": false
        },
        {
            "id": 8,
            "title": "Amsterdam",
            "subtitle": "Netherlands",
            "detail": "Heineken Brewery",
            "isChecked": true
        },
        {
            "id": 9,
            "title": "Tokyo",
            "subtitle": "Japan",
            "detail": "Canon",
            "isChecked": false
        },
        {
            "id": 10,
            "title": "London",
            "subtitle": "United Kingdom",
            "detail": "Vodafone",
            "isChecked": false
        },
        {
            "id": 11,
            "title": "Florence",
            "subtitle": "Italy",
            "detail": "Gucci",
            "isChecked": true
        }
      ]
    }
  }

//* Data Set for page 2
getDataForLayout2 = (): any => {
    return {
        'toolbarTitle': 'BounceIn',
        "items": [
            {
                "title": "iPhone 8",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/1.jpg",
                "button": "BUY"
            },
            {
                "title": "500+",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/2.jpg",
                "button": "BUY"
            },
            {
                "title": "watch black",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/3.jpg",
                "button": "BUY"
            },
            {
                "title": "canon photoaparat",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/4.jpg",
                "button": "BUY"
            },
            {
                "title": "50mm",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/5.jpg",
                "button": "BUY"
            },
            {
                "title": "nikon photoaparat",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/6.jpg",
                "button": "BUY"
            },
            {
                "title": "sony PS 4",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/7.jpg",
                "button": "BUY"
            },
            {
                "title": "watch new",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/8.jpg",
                "button": "BUY"
            }
        ]
      };
    }

      //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle' : 'FadeInUp',
      "items": [
          {
              "id": 1,
              "title": "Free Ride",
              "backgroundImage": "assets/imgs/background/2.jpg",
              "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
              "id": 2,
              "title": "Bridge Tour",
              "backgroundImage": "assets/imgs/background/5.jpg",
              "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
              "id": 3,
              "title": "Sea Tour",
              "backgroundImage": "assets/imgs/background/21.jpg",
              "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
              "id": 4,
              "title": "Main Stage Event",
              "backgroundImage": "assets/imgs/background/7.jpg",
              "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
              "id": 5,
              "title": "Classic Open Air",
              "backgroundImage": "assets/imgs/background/11.jpg",
              "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
              "id": 6,
              "title": "Concert Summer",
              "backgroundImage": "assets/imgs/background/14.jpg",
              "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
          },
          {
              "id": 7,
              "title": "Open Air Concerts",
              "backgroundImage": "assets/imgs/background/10.jpg",
              "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
          }
        ]
    };
  }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
      return {
        'toolbarTitle' : 'Styled cards 2',
        "items": [
            {
                "id": 1,
                "title": "Digital Watch",
                "subtitle": "Category: Watch",
                "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                "image": "assets/imgs/background/6.jpg",
                "price": "$144.50",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
            },
            {
                "id": 2,
                "title": "Android Watch",
                "subtitle": "Category: Watch",
                "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
                "image": "assets/imgs/background/9.jpg",
                "price": "$130.99",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
            },
            {
                "id": 3,
                "title": "Acoustic Guitars",
                "subtitle": "Category: Guitars",
                "description": "Icero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
                "image": "assets/imgs/background/10.jpg",
                "price": "$354.05",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
            },
            {
                "id": 4,
                "title": "Bass guitar",
                "subtitle": "Category: Guitars",
                "description": "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                "image": "assets/imgs/background/13.jpg",
                "price": "$338.99",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
            },
            {
                "id": 5,
                "title": "Classical guitar",
                "subtitle": "Category: Guitars",
                "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                "image": "assets/imgs/background/15.jpg",
                "price": "$109.60",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
            }
        ]
      };
    }

      //* Data Set for page 5
  getDataForLayout5 = (): any => {
    return {
      'toolbarTitle' : 'ZoomIn',
      "items": [
          {
              "id": 1,
              "category": "best offer",
              "image": "assets/imgs/background/11.jpg",
              "title": "Free Ride Tour",
              "subtitle": "West Avenue, NYC",
              "button": "$135.99"
          },
          {
              "id": 2,
              "category": "main event",
              "image": "assets/imgs/background/14.jpg",
              "title": "Open Air Concert",
              "subtitle": "Hyde Park, London",
              "button": "$312.99"
          },
          {
              "id": 3,
              "category": "Best Tourt",
              "image": "assets/imgs/background/21.jpg",
              "title": "Sea ture",
              "subtitle": "Guilin, Kweilin",
              "button": "$213.45"
          },
          {
              "id": 4,
              "category": "Mountain",
              "image": "assets/imgs/background/7.jpg",
              "title": "Mountain Trout",
              "subtitle": "Mountain Trout Camp",
              "button": "$338.60"
          },
          {
              "id": 5,
              "category": "Bridge Tour",
              "image": "assets/imgs/background/5.jpg",
              "title": "Bridge Tour",
              "subtitle": "BridgeClimb, Sydney",
              "button": "$410.85"
          },
          {
              "id": 6,
              "category": "best events",
              "image": "assets/imgs/background/2.jpg",
              "title": "Main Stage Event",
              "subtitle": "Hyde Park, London ",
              "button": "$516.55"
          }
      ]
    }
  }

    //* Data Set for page 6
    getDataForLayout6 = (): any => {
      return {
        'toolbarTitle': 'ZoomIn and FadeIn Left',
        "headerImage": "assets/imgs/background/9.jpg",
        "title": "Engage real-time",
        "subtitle": "Startup Pitches",
        "items": [
            {
                "id": 1,
                "title": "Victoria Simpson",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/9.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 2,
                "title": "Samantha Reynolds",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/10.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 3,
                "title": "Stacey Harris",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/11.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 4,
                "title": "Jacqueline Guyon",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/12.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 5,
                "title": "Mia Langevoort",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/13.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 6,
                "title": "Amy Simsek",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/14.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 7,
                "title": "Charlotte Sital",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/15.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 8,
                "title": "Iria Padrón",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/16.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 9,
                "title": "Laura Sarabia",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/17.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 10,
                "title": "Alexia Bañuelos",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/18.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 11,
                "title": "Erika Quiroz",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/19.jpg",
                "imageAlt": "avatar",
                "button": "Read"
            },
            {
                "id": 12,
                "title": "Emma Banda",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/20.jpg",
                "imageAlt": "Presque Isle Harbor",
                "button": "Read"
            }
        ]
      }
    }

      //* Data Set for page 7
  getDataForLayout7 = (): any => {
    return {
      'toolbarTitle': 'BounceIn Right',
      "image": "assets/imgs/avatar/20.jpg",
      "title": "Samantha Kennedy",
      "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
      "category": "populary",
      "items": [
          {
              "id": 1,
              "category": "Engineering News",
              "title": "Small flying robots haul heavy loads",
              "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
              },
              "comment": {
                  "icon": "chatbox-ellipses",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
              }
          },
          {
              "id": 2,
              "category": "Bioengineering News",
              "title": "Creating custom brains from the ground up",
              "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
              },
              "comment": {
                  "icon": "chatbox-ellipses",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
              }
          },
          {
              "id": 3,
              "category": "Energy and Resources News",
              "title": "3D-printed lithium-ion batteries",
              "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
              },
              "comment": {
                  "icon": "chatbox-ellipses",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
              }
          }
      ]
    }
  }

    //* Data Set for page 8
    getDataForLayout8 = (): any => {
      return {
        'toolbarTitle': 'BounceIn Left and BounceIn Left',
        "headerImage": "assets/imgs/background/9.jpg",
        "shareIcon": "ellipsis-horizontal",
        "items": [
            {
                "id": 1,
                "category": "NEW OFFER",
                "title": "Super & Black",
                "titleDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy",
                "subtitle": "Available Now",
                "button": "$63.99",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "product": [
                      {
                          "title": "iPhone 8",
                          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                          "avatar": "assets/imgs/avatar/1.jpg",
                          "button": "BUY"
                      },
                      {
                          "title": "500+",
                          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                          "avatar": "assets/imgs/avatar/2.jpg",
                          "button": "BUY"
                      },
                      {
                          "title": "watch black",
                          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                          "avatar": "assets/imgs/avatar/3.jpg",
                          "button": "BUY"
                      },
                      {
                          "title": "canon photoaparat",
                          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                          "avatar": "assets/imgs/avatar/4.jpg",
                          "button": "BUY"
                      },
                      {
                          "title": "50mm",
                          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                          "avatar": "assets/imgs/avatar/5.jpg",
                          "button": "BUY"
                      },
                      {
                          "title": "nikon photoaparat",
                          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                          "avatar": "assets/imgs/avatar/6.jpg",
                          "button": "BUY"
                      },
                      {
                          "title": "sony PS 4",
                          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                          "avatar": "assets/imgs/avatar/7.jpg",
                          "button": "BUY"
                      },
                      {
                          "title": "watch new",
                          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                          "avatar": "assets/imgs/avatar/8.jpg",
                          "button": "BUY"
                      }
                  ]
            }
        ]
      }
    }

      //* Data Set for page 9
  getDataForLayout9 = (): any => {
    return {
      'toolbarTitle': 'SlideIn Up',
      'allComments': '2121 Comments',
      'items': [
          {
              'id': 1,
              'image': 'assets/imgs/avatar/16.jpg',
              'title': 'Erica Romaguera',
              'time': '18 August 2018 at 12:20pm',
              'description': 'If you could have any kind of pet, what would you choose?'
          },
          {
              'id': 2,
              'image': 'assets/imgs/avatar/15.jpg',
              'title': 'Caleigh Jerde',
              'time': '18 August 2018 at 8:13pm',
              'description': 'If you could learn any language, what would you choose?'
          },
          {
              'id': 3,
              'image': 'assets/imgs/avatar/14.jpg',
              'title': 'Lucas Schultz',
              'time': '18 August 2018 at 5:22pm',
              'description': 'Life is about making an impact, not making an income.'
          },
          {
              'id': 4,
              'image': 'assets/imgs/avatar/13.jpg',
              'title': 'Carole Marvin',
              'time': '18 August 2018 at 7:36am',
              'description': `I\’ve learned that people will forget what you said,
               people will forget what you did, but people will never forget how you made them feel`
          },
          {
              'id': 5,
              'image': 'assets/imgs/avatar/12.jpg',
              'title': 'Doriana Feeney',
              'time': '18 August 2018 at 5:28am',
              'description': 'Definiteness of purpose is the starting point of all achievement.'
          },
          {
              'id': 6,
              'image': 'assets/imgs/avatar/11.jpg',
              'title': 'Nia Gutkowski',
              'time': '18 August 2018 at 11:27pm',
              'description': 'Life is what happens to you while you’re busy making other plans'
          },
          {
              'id': 7,
              'image': 'assets/imgs/avatar/15.jpg',
              'title': 'Caleigh Jerde',
              'time': '18 August 2018 at 8:13pm',
              'description': 'If you could learn any language, what would you choose?'
          },
          {
              'id': 8,
              'image': 'assets/imgs/avatar/14.jpg',
              'title': 'Lucas Schultz',
              'time': '18 August 2018 at 5:22pm',
              'description': 'Life is about making an impact, not making an income.'
          },
          {
              'id': 9,
              'image': 'assets/imgs/avatar/13.jpg',
              'title': 'Carole Marvin',
              'time': '18 August 2018 at 7:36am',
              'description': `I\’ve learned that people will forget what you said,
               people will forget what you did, but people will never forget how you made them feel`
          },
          {
              'id': 10,
              'image': 'assets/imgs/avatar/12.jpg',
              'title': 'Doriana Feeney',
              'time': '18 August 2018 at 5:28am',
              'description': 'Definiteness of purpose is the starting point of all achievement.'
          },
          {
              'id': 11,
              'image': 'assets/imgs/avatar/11.jpg',
              'title': 'Nia Gutkowski',
              'time': '18 August 2018 at 11:27pm',
              'description': 'Life is what happens to you while you’re busy making other plans'
          }
      ]
    }
  }

    //* Data Set for page 10
    getDataForLayout10 = (): any => {
      return {
        'toolbarTitle': 'SlideIn Left',
        "header": "List friends",
        "items": [
            {
                "id": 1,
                "title": "Erica Romaguera",
                "subtitle": "@erica",
                "image": "assets/imgs/avatar/13.jpg"
            },
            {
                "id": 2,
                "title": "Nia Gutkowski",
                "subtitle": "@nia234",
                "image": "assets/imgs/avatar/14.jpg"
            },
            {
                "id": 3,
                "title": "Camila Hintz",
                "subtitle": "@camila",
                "image": "assets/imgs/avatar/15.jpg"
            },
            {
                "id": 4,
                "title": "Anna Yost",
                "subtitle": "@anna",
                "image": "assets/imgs/avatar/16.jpg"
            },
            {
                "id": 5,
                "title": "Georgianna Baumbach",
                "subtitle": "@georgianna",
                "image": "assets/imgs/avatar/17.jpg"
            },
            {
                "id": 6,
                "title": "Jaqueline Stehr",
                "subtitle": "@jaqueline",
                "image": "assets/imgs/avatar/18.jpg"
            },
            {
                "id": 7,
                "title": "Naomi Mante",
                "subtitle": "@naomi",
                "image": "assets/imgs/avatar/19.jpg"
            },
            {
                "id": 8,
                "title": "Amaya Abshire",
                "subtitle": "@amaya",
                "image": "assets/imgs/avatar/20.jpg"
            },
            {
                "id": 9,
                "title": "Rickie Glover",
                "subtitle": "@rickie",
                "image": "assets/imgs/avatar/21.jpg"
            },
            {
                "id": 10,
                "title": "Antone Mayert",
                "subtitle": "@antone",
                "image": "assets/imgs/avatar/22.jpg"
            },
            {
                "id": 11,
                "title": "Alison Streich",
                "subtitle": "@alison",
                "image": "assets/imgs/avatar/23.jpg"
            }
        ]
      }
    }


  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('animation/' + item.theme)
          .valueChanges()
          .subscribe(snapshot => {
            that.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            that.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        that.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
