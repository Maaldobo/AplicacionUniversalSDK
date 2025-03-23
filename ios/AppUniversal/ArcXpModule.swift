//3312

import ExpoModulesCore
import ArcXP

public class ArcXpModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ArcXpModule")


                                                                      //3312
    // Función para inicializar el SDK ArcXP
    Function("initializeSdk") { () -> String in
      // Configuración de contenido de ArcXP
      let contentConfig = ArcXPContentConfig(
        organizationName: "eluniversal",            // +++++MODIFICACION+++++
        serverEnvironment: .production,           // +++++MODIFICACION+++++ (.production si es ambiente prod)
        site: "eluniversal",                      // +++++MODIFICACION+++++
        hostDomain: "https://api.sandbox.eluniversal.arcpublishing.com/",  // +++++MODIFICACION+++++
        thumborResizerKey: "YOUR_RESIZER_KEY"  // +++++MODIFICACION+++++ (clave para servicio de imágenes, si aplica)
      )
      let cacheConfig = ArcXPCacheConfig(timeToConsider: 10)  // Configuración de caché (ej. 10 minutos)
      ArcXPContentManager.setUp(with: contentConfig, cacheConfig: cacheConfig)  // Inicializa content manager&#8203;:contentReference[oaicite:17]{index=17}&#8203;:contentReference[oaicite:18]{index=18}
      return "ArcXP SDK listo!"
    }

    // Función asíncrona para obtener un artículo en JSON
    AsyncFunction("fetchArticle") { (id: String, promise: Promise) in
      ArcXPContentManager.client.getRawJsonContent(requestType: .contentType, identifierOrAlias: id) { result in
        switch result {
          case .success(let jsonString):
            promise.resolve(jsonString)
          case .failure(let error):
            promise.reject("ArcXPError", error.localizedDescription, error)
        }
      }
    }

    // Función asíncrona para obtener una colección en JSON
    AsyncFunction("fetchCollection") { (alias: String, promise: Promise) in
      ArcXPContentManager.client.getRawJsonContent(requestType: .collectionType, identifierOrAlias: alias) { result in
        switch result {
          case .success(let jsonString):
            promise.resolve(jsonString)
          case .failure(let error):
            promise.reject("ArcXPError", error.localizedDescription, error)
        }
      }
    }

    // Función asíncrona para obtener la lista de secciones de navegación en JSON
    AsyncFunction("fetchSectionList") { (promise: Promise) in
      ArcXPContentManager.client.getRawJsonContent(requestType: .sectionListType, identifierOrAlias: "mobile-nav") { result in
        switch result {
          case .success(let jsonString):
            promise.resolve(jsonString)
          case .failure(let error):
            promise.reject("ArcXPError", error.localizedDescription, error)
        }
      }
    }
  }
}
