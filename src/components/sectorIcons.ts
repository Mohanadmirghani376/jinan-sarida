import type { ComponentType, SVGProps } from "react";
import { TruckIcon, ExcavatorIcon, TractorIcon, MedicalIcon } from "./icons";

export const sectorIconMap: Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  trucks: TruckIcon,
  construction: ExcavatorIcon,
  agriculture: TractorIcon,
  medical: MedicalIcon,
};
