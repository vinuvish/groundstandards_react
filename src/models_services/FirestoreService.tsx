import { fireFirebase, fireFirestore } from '../firebase/firebase';
import { IAuthUserUpdate } from '../models/AuthUserModel';
import { NotificationModel } from '../models/NotificationModel';
import { DocumentModel } from '../models/DocumentModel';
import { ApiService } from './ApiService';

export class FirestoreService {
  static userUpdate = async function (authUser: IAuthUserUpdate): Promise<boolean> {
    try {
      await fireFirestore
        .collection('users')
        .doc(authUser.id)
        .set(
          {
            ...authUser,
            timestampUpdated: fireFirebase.firestore.Timestamp.now().toDate()
          },
          { merge: true }
        );
      return true;
    } catch (error) {
      return false;
    }
  };

  static notificationAdd = async function ({ title, body, linkUrl }: { title: string; body: string; linkUrl: string }): Promise<boolean | string> {
    try {
      const doc = await fireFirestore.collection('notifications').add({
        linkUrl: linkUrl,
        body: body,
        title: title,
        timestampAdded: fireFirebase.firestore.Timestamp.now().toDate()
      });

      await ApiService.sendNotificationToUsers({ body: body, title: title });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  static notificationUpdate = async function (notification: NotificationModel): Promise<boolean> {
    try {
      await fireFirestore.collection('notifications').doc(notification.id).set(
        {
          linkUrl: notification.linkUrl,
          body: notification.body,
          title: notification.title
        },
        { merge: true }
      );

      await ApiService.sendNotificationToUsers({ body: notification.body, title: notification.title });

      return true;
    } catch (error) {
      return false;
    }
  };

  static notificationDelete = async function (notification: NotificationModel): Promise<boolean> {
    try {
      await fireFirestore.collection('notifications').doc(notification.id).delete();
      return true;
    } catch (error) {
      return false;
    }
  };

  /* ------------------------------- NOTE EVENTS ------------------------------ */
  static eventAdd = async function ({ title, subTitle, imageURL }: { title: string; subTitle: string; imageURL: string }): Promise<boolean | string> {
    try {
      await fireFirestore.collection('events').add({
        title: title.trim(),
        subTitle: subTitle.trim(),
        imageURL: imageURL.trim(),
        timestampAdded: fireFirebase.firestore.Timestamp.now().toDate()
      });
      return true;
    } catch (error) {
      return false;
    }
  };

  static eventUpdate = async function (event: DocumentModel): Promise<boolean> {
    try {
      await fireFirestore.collection('productsCategories').doc(event.id).set(
        {
          // title: event.title.trim(),
          // subTitle: event.subTitle.trim(),
          // imageURL: event.imageURL.trim(),
          // timestampUpdated: fireFirebase.firestore.Timestamp.now().toDate()
        },
        { merge: true }
      );

      return true;
    } catch (error) {
      return false;
    }
  };

  static eventDelete = async function (event: DocumentModel): Promise<boolean> {
    try {
      await fireFirestore.collection('events').doc(event.id).delete();
      return true;
    } catch (error) {
      return false;
    }
  };
}
