import {
  VERIFY_USER,
  PARSE_DARA,
  TRANSFORM_DATA_DEFAULT_FORMAT,
  GET_COUNTRY_FIELDS,
  MODIFY_VERIFIED_OBJECT_COUNTRY_FIELDS,
  REMOVE_UNNECESSARY_FIELDS,
  CHECK_REQUIRED_FIDLDS,
} from './consts';

export default {
  async [VERIFY_USER]({ dispatch }) {
    const res = await this.$axios.$post('/profile/me/verify').catch(() => null);
    if (res && res.ok && res.verified) {
      return { ok: true, message: 'User has been verified' };
    } if (res && res.ok && !res.verified) {
      return { ok: false, message: 'Your data is not correct' };
    }

    try {
      return {
        ok: false,
        message: 'Verification error',
        error: res.data.errors[Object.keys(res.data.errors)[0]][0],
      };
    } catch (error) {
      return { ok: false, message: 'Verification error' };
    }
  },

  [TRANSFORM_DATA_DEFAULT_FORMAT]({}, userData) {
    const person = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      middleName: userData.middleName,
      birthDate: userData.birthDate
        ? new Date(userData.birthDate).toJSON()
        : undefined,
      gender: userData.gender,
      birthPlace: userData.birthPlace,
    };
    const document = {
      number: userData.identityDocumentNumber?.toString(),
      serie: userData.identityDocumentSerie?.toString(),
      taxCode: userData.taxCode?.toString(),
      issueDate: userData.identityDocumentRelDate
        ? new Date(userData.identityDocumentRelDate).toJSON()
        : undefined,
      expireDate: userData.identityDocumentExpDate
        ? new Date(userData.identityDocumentExpDate).toJSON()
        : undefined,
      type: userData.identityDocument,
      country: userData.country,
      driverLicenseNumber:
        userData.identityDocument === 'Driver license'
          ? userData.identityDocumentNumber?.toString()
          : undefined,
    };
    const communication = {
      email: userData.email,
      ipAddress: userData.ipAddress,
      telephone: userData.phone || undefined,
      cellphone: userData.cellphone,
    };
    const location = {
      // state: userData.shippingState,
      state: 'PA',
      city: userData.shippingCity,
      province: userData.province,
      streetType: userData.shippingStreetType,
      streetName: userData.shippingStreetName,
      buildingNum: userData.shippingBuildingNum?.toString(),
      unitNumber: userData.shippingUnitNumber?.toString(),
      houseExtension: userData.houseExtension,
      zipCode: userData.shippingZip?.toString(),
    };
    const result = {
      person, document, communication, location,
    };
    // console.log(result);
    // commit("setVerifiedObject", result);
    return result;
  },

  async [MODIFY_VERIFIED_OBJECT_COUNTRY_FIELDS](
    { commit, dispatch },
    { object, fields },
  ) {
    const allowableFields = fields.fields;
    return await dispatch(REMOVE_UNNECESSARY_FIELDS, {
      object,
      fields: allowableFields,
    });
  },

  async [REMOVE_UNNECESSARY_FIELDS](
    { dispatch },
    { object, fields },
  ) {
    for (const topField in object) {
      if (
        typeof object[topField] === 'object'
        && Object.keys(object[topField]).length === 0
        && object[topField].constructor === Object
      ) {
        delete object[topField];
      } else if (!fields[topField]) {
        delete object[topField];
      } else if (!object[topField]) {
        delete object[topField];
      } else if (typeof object[topField] === 'object') {
        // eslint-disable-next-line no-await-in-loop
        object[topField] = await dispatch(REMOVE_UNNECESSARY_FIELDS, {
          object: object[topField],
          fields: fields[topField].fields,
        });
      }
    }
    for (const topField in object) {
      if (
        typeof object[topField] === 'object'
        && Object.keys(object[topField]).length === 0
      ) {
        delete object[topField];
      }
    }
    return object;
  },

  async [CHECK_REQUIRED_FIDLDS]({ dispatch }, { object, fieldsObj }) {
    const requiredFields = fieldsObj.required;
    const otherFields = fieldsObj.fields;
    for (const reqField of requiredFields) {
      if (
        !object[reqField]
        || (typeof object[reqField] === 'object'
          && Object.keys(object[reqField]).length === 0
          && object[reqField].constructor === Object)
      ) {
        return false;
      }
      if (
        Object.keys(otherFields).length !== 0
        && otherFields.constructor === Object
        && object[reqField].constructor === Object
      ) {
        const status = await dispatch(CHECK_REQUIRED_FIDLDS, {
          object: object[reqField],
          fieldsObj: otherFields[reqField],
        });
        if (!status) {
          return false;
        }
      }
    }

    return true;
  },
};
