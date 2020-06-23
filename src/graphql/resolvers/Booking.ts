import { Context } from '../../context';
import { Booking } from '../../generated/prisma-client';
import { BookingResolvers } from '../../generated/resolvers/resolverTypes';

const Booking: BookingResolvers.Type = {
  ...BookingResolvers.defaultResolvers,

  client: ({ id }: Booking, args: {}, { prisma }: Context) =>
    prisma
      .booking({
        id,
      })
      .client(),
  ad: ({ id }: Booking, args: {}, { prisma }: Context) =>
    prisma
      .booking({
        id,
      })
      .ad(),
};

export default Booking;
