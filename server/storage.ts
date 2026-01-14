import { Inquiry } from "./models/inquiry";

export const storage = {
  async createInquiry(data: any) {
    const inquiry = await Inquiry.create(data);
    return inquiry;
  },
};
