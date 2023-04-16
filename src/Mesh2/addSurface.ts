import Mesh from "./Mesh";
import { Indices, triangle, equalTriangles } from "./Triangle";
import buildMesh from "./buildMesh";
import surfaceCanBeAdded from "./surfaceCanBeAdded";

const addSurface =
  (indices: Indices) =>
  (mesh: Mesh): Mesh => {
    return surfaceCanBeAdded(indices)(mesh)
      ? buildMesh(mesh.vertices, mesh.surfaces.concat(triangle(indices)))
      : mesh;
  };
export default addSurface;
