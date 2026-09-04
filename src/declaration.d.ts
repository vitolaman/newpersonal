import * as THREE from "three";
import { ReactThreeFiber } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      points: ReactThreeFiber.Object3DNode<THREE.Points, typeof THREE.Points>;
    }
  }
}
