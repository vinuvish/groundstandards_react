export class DocumentModel implements IEventModel {
  driversLicenseFront: DocumentItem | null;
  driversLicenseBack: DocumentItem | null;
  driversInsuranceCardFront: DocumentItem | null;
  driversInsuranceCardBack: DocumentItem | null;
  driversVehicleRegistrationFront: DocumentItem | null;
  driversVehicleRegistrationBack: DocumentItem | null;
  driversTaxiLimousineIdFront: DocumentItem | null;
  driversTaxiLimousineIdBack: DocumentItem | null;
  driversPicture: DocumentItem | null;
  id: string;
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  timestampCreated: Date;
  state: string;
  note: string;

  constructor(x: IEventModel) {
    {
      this.driversInsuranceCardBack = x.driversInsuranceCardBack;
      this.driversInsuranceCardFront = x.driversInsuranceCardFront;
      this.driversLicenseBack = x.driversLicenseBack;
      this.driversLicenseFront = x.driversLicenseFront;
      this.driversPicture = x.driversPicture;
      this.driversTaxiLimousineIdBack = x.driversTaxiLimousineIdBack;
      this.driversTaxiLimousineIdFront = x.driversTaxiLimousineIdFront;
      this.driversVehicleRegistrationBack = x.driversVehicleRegistrationBack;
      this.driversVehicleRegistrationFront = x.driversVehicleRegistrationFront;
      this.email = x.email;
      this.firstName = x.firstName;
      this.id = x.id;
      this.lastName = x.lastName;
      this.note = x.note;
      this.state = x.state;
      this.timestampCreated = x.timestampCreated;
      this.uid = x.uid;
    }
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getTotalDocuments(): string {
    let totaldocuments = 0;
    if (this.driversInsuranceCardBack?.imageUrl) totaldocuments += 1;
    if (this.driversInsuranceCardFront?.imageUrl) totaldocuments += 1;
    if (this.driversLicenseBack?.imageUrl) totaldocuments += 1;
    if (this.driversLicenseFront?.imageUrl) totaldocuments += 1;
    if (this.driversTaxiLimousineIdBack?.imageUrl) totaldocuments += 1;
    if (this.driversTaxiLimousineIdFront?.imageUrl) totaldocuments += 1;
    if (this.driversVehicleRegistrationBack?.imageUrl) totaldocuments += 1;
    if (this.driversVehicleRegistrationFront?.imageUrl) totaldocuments += 1;
    if (this.driversPicture?.imageUrl) totaldocuments += 1;
    return `${totaldocuments}/9 documents`;
  }

  static fromFirestore(doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): DocumentModel | null {
    const data = doc.data();
    if (!data) return null;
    return new DocumentModel({
      id: doc.id,
      driversInsuranceCardBack: DocumentItem.fromMap(data['driversInsuranceCardBack']),
      driversInsuranceCardFront: DocumentItem.fromMap(data['driversInsuranceCardFront']),
      driversLicenseBack: DocumentItem.fromMap(data['driversLicenseBack']),
      driversLicenseFront: DocumentItem.fromMap(data['driversLicenseFront']),
      driversPicture: DocumentItem.fromMap(data['driversPicture']),
      driversTaxiLimousineIdBack: DocumentItem.fromMap(data['driversTaxiLimousineIdBack']),
      driversTaxiLimousineIdFront: DocumentItem.fromMap(data['driversTaxiLimousineIdFront']),
      driversVehicleRegistrationBack: DocumentItem.fromMap(data['driversVehicleRegistrationBack']),
      driversVehicleRegistrationFront: DocumentItem.fromMap(data['driversVehicleRegistrationFront']),
      email: data['email'],
      firstName: data['firstName'],
      lastName: data['lastName'],
      note: data['note'],
      state: data['state'],
      timestampCreated: data['timestampCreated'].toDate() ?? new Date(),
      uid: data['uid']
    });
  }
}

interface IEventModel {
  driversLicenseFront: DocumentItem | null;
  driversLicenseBack: DocumentItem | null;
  driversInsuranceCardFront: DocumentItem | null;
  driversInsuranceCardBack: DocumentItem | null;
  driversVehicleRegistrationFront: DocumentItem | null;
  driversVehicleRegistrationBack: DocumentItem | null;
  driversTaxiLimousineIdFront: DocumentItem | null;
  driversTaxiLimousineIdBack: DocumentItem | null;
  driversPicture: DocumentItem | null;
  id: string;
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  timestampCreated: Date;
  state: string;
  note: string;
}

class DocumentItem implements IDocumentItem {
  isVerified: boolean;
  isRejected: boolean;
  imageUrl: string;
  timestampCreated: Date;

  constructor(x: IDocumentItem) {
    this.isRejected = x.isRejected;
    this.isVerified = x.isVerified;
    this.imageUrl = x.imageUrl;
    this.timestampCreated = x.timestampCreated;
  }

  toMap() {
    return {
      isVerified: this.isVerified,
      isRejected: this.isRejected,
      imageUrl: this.imageUrl,
      timestampCreated: this.timestampCreated
    };
  }

  static fromMap(map: any) {
    if (map == null) return null;

    return new DocumentItem({
      isVerified: map['isVerified'],
      isRejected: map['isRejected'],
      imageUrl: map['imageUrl'],
      timestampCreated: map['timestampCreated']?.toDate() ?? new Date()
    });
  }
}

interface IDocumentItem {
  isVerified: boolean;
  isRejected: boolean;
  imageUrl: string;
  timestampCreated: Date;
}
