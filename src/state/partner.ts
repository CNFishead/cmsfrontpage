//create a zustand store for a token of a user
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type PartnerState = {
  partner: string | undefined;
  setPartner: (partner: string) => void;
};

export const usePartnerStore = create(
  persist<PartnerState>(
    (set) => ({
      partner: undefined,
      setPartner: (partner) => {
        set({ partner });
      },
    }),
    {
      name: 'partner-store', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    }
  )
);
