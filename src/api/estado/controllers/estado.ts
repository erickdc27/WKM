import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::estado.estado",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: documentId } = ctx.params;

      const estado = await strapi.documents("api::estado.estado").findOne({
        documentId: documentId,
        populate: ["cidades"],
      });

      if (!estado) {
        return ctx.notFound("Estado não encontrado.");
      }

      return ctx.send(estado);
    },

    async delete(ctx) {
      const { id: documentId } = ctx.params;

      const estado = await strapi.documents("api::estado.estado").findOne({
        documentId: documentId,
      });

      if (!estado) {
        return ctx.notFound("Estado não encontrado.");
      }

      const cidadesCount = await strapi.db.query("api::cidade.cidade").count({
        where: { estado: estado.id },
      });

      if (cidadesCount > 0) {
        return ctx.badRequest(
          "Este estado não pode ser removido porque existem cidades associadas a ele."
        );
      }

      await strapi.documents("api::estado.estado").delete({
        documentId: documentId,
      });

      return ctx.send(null, 204);
    },
  })
);