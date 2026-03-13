/** Generated from Remote JSON Schema for gateway.networking.k8s.io.v1.TLSRoute */

/**
 * The TLSRoute resource is similar to TCPRoute, but can be configured
 * to match against TLS-specific metadata. This allows more flexibility
 * in matching streams for a given TLS listener.
 *
 * If you need to forward traffic to a single target for a TLS listener, you
 * could choose to use a TCPRoute with a TLS listener.
 */
export interface GatewayNetworkingK8SIoV1TLSRoute {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  /**
   * Spec defines the desired state of TLSRoute.
   */
  spec: {
    /**
     * Hostnames defines a set of SNI hostnames that should match against the
     * SNI attribute of TLS ClientHello message in TLS handshake. This matches
     * the RFC 1123 definition of a hostname with 2 notable exceptions:
     *
     * 1. IPs are not allowed in SNI hostnames per RFC 6066.
     * 2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard
     *    label must appear by itself as the first label.
     *
     * @minItems 1
     * @maxItems 16
     */
    hostnames: string[];
    /**
     * ParentRefs references the resources (usually Gateways) that a Route wants
     * to be attached to. Note that the referenced parent resource needs to
     * allow this for the attachment to be complete. For Gateways, that means
     * the Gateway needs to allow attachment from Routes of this kind and
     * namespace. For Services, that means the Service must either be in the same
     * namespace for a "producer" route, or the mesh implementation must support
     * and allow "consumer" routes for the referenced Service. ReferenceGrant is
     * not applicable for governing ParentRefs to Services - it is not possible to
     * create a "producer" route for a Service in a different namespace from the
     * Route.
     *
     * There are two kinds of parent resources with "Core" support:
     *
     * * Gateway (Gateway conformance profile)
     * * Service (Mesh conformance profile, ClusterIP Services only)
     *
     * This API may be extended in the future to support additional kinds of parent
     * resources.
     *
     * ParentRefs must be _distinct_. This means either that:
     *
     * * They select different objects.  If this is the case, then parentRef
     *   entries are distinct. In terms of fields, this means that the
     *   multi-part key defined by `group`, `kind`, `namespace`, and `name` must
     *   be unique across all parentRef entries in the Route.
     * * They do not select different objects, but for each optional field used,
     *   each ParentRef that selects the same object must set the same set of
     *   optional fields to different values. If one ParentRef sets a
     *   combination of optional fields, all must set the same combination.
     *
     * Some examples:
     *
     * * If one ParentRef sets `sectionName`, all ParentRefs referencing the
     *   same object must also set `sectionName`.
     * * If one ParentRef sets `port`, all ParentRefs referencing the same
     *   object must also set `port`.
     * * If one ParentRef sets `sectionName` and `port`, all ParentRefs
     *   referencing the same object must also set `sectionName` and `port`.
     *
     * It is possible to separately reference multiple distinct objects that may
     * be collapsed by an implementation. For example, some implementations may
     * choose to merge compatible Gateway Listeners together. If that is the
     * case, the list of routes attached to those resources should also be
     * merged.
     *
     * Note that for ParentRefs that cross namespace boundaries, there are specific
     * rules. Cross-namespace references are only valid if they are explicitly
     * allowed by something in the namespace they are referring to. For example,
     * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
     * generic way to enable other kinds of cross-namespace reference.
     *
     * @maxItems 32
     */
    parentRefs?: {
      /**
       * Group is the group of the referent.
       * When unspecified, "gateway.networking.k8s.io" is inferred.
       * To set the core API group (such as for a "Service" kind referent),
       * Group must be explicitly set to "" (empty string).
       *
       * Support: Core
       */
      group?: string;
      /**
       * Kind is kind of the referent.
       *
       * There are two kinds of parent resources with "Core" support:
       *
       * * Gateway (Gateway conformance profile)
       * * Service (Mesh conformance profile, ClusterIP Services only)
       *
       * Support for other resources is Implementation-Specific.
       */
      kind?: string;
      /**
       * Name is the name of the referent.
       *
       * Support: Core
       */
      name: string;
      /**
       * Namespace is the namespace of the referent. When unspecified, this refers
       * to the local namespace of the Route.
       *
       * Note that there are specific rules for ParentRefs which cross namespace
       * boundaries. Cross-namespace references are only valid if they are explicitly
       * allowed by something in the namespace they are referring to. For example:
       * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
       * generic way to enable any other kind of cross-namespace reference.
       *
       * Support: Core
       */
      namespace?: string;
      /**
       * Port is the network port this Route targets. It can be interpreted
       * differently based on the type of parent resource.
       *
       * When the parent resource is a Gateway, this targets all listeners
       * listening on the specified port that also support this kind of Route(and
       * select this Route). It's not recommended to set `Port` unless the
       * networking behaviors specified in a Route must apply to a specific port
       * as opposed to a listener(s) whose port(s) may be changed. When both Port
       * and SectionName are specified, the name and port of the selected listener
       * must match both specified values.
       *
       * Implementations MAY choose to support other parent resources.
       * Implementations supporting other types of parent resources MUST clearly
       * document how/if Port is interpreted.
       *
       * For the purpose of status, an attachment is considered successful as
       * long as the parent resource accepts it partially. For example, Gateway
       * listeners can restrict which Routes can attach to them by Route kind,
       * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
       * from the referencing Route, the Route MUST be considered successfully
       * attached. If no Gateway listeners accept attachment from this Route,
       * the Route MUST be considered detached from the Gateway.
       *
       * Support: Extended
       */
      port?: number;
      /**
       * SectionName is the name of a section within the target resource. In the
       * following resources, SectionName is interpreted as the following:
       *
       * * Gateway: Listener name. When both Port (experimental) and SectionName
       * are specified, the name and port of the selected listener must match
       * both specified values.
       * * Service: Port name. When both Port (experimental) and SectionName
       * are specified, the name and port of the selected listener must match
       * both specified values.
       *
       * Implementations MAY choose to support attaching Routes to other resources.
       * If that is the case, they MUST clearly document how SectionName is
       * interpreted.
       *
       * When unspecified (empty string), this will reference the entire resource.
       * For the purpose of status, an attachment is considered successful if at
       * least one section in the parent resource accepts it. For example, Gateway
       * listeners can restrict which Routes can attach to them by Route kind,
       * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
       * the referencing Route, the Route MUST be considered successfully
       * attached. If no Gateway listeners accept attachment from this Route, the
       * Route MUST be considered detached from the Gateway.
       *
       * Support: Core
       */
      sectionName?: string;
      [k: string]: unknown;
    }[];
    /**
     * Rules are a list of actions.
     *
     * @minItems 1
     * @maxItems 1
     */
    rules: {
      /**
       * BackendRefs defines the backend(s) where matching requests should be
       * sent. If unspecified or invalid (refers to a nonexistent resource or
       * a Service with no endpoints), the rule performs no forwarding; if no
       * filters are specified that would result in a response being sent, the
       * underlying implementation must actively reject request attempts to this
       * backend, by rejecting the connection. Request rejections must respect
       * weight; if an invalid backend is requested to have 80% of requests, then
       * 80% of requests must be rejected instead.
       *
       * Support: Core for Kubernetes Service
       *
       * Support: Extended for Kubernetes ServiceImport
       *
       * Support: Implementation-specific for any other resource
       *
       * Support for weight: Extended
       *
       * @minItems 1
       * @maxItems 16
       */
      backendRefs: {
        /**
         * Group is the group of the referent. For example, "gateway.networking.k8s.io".
         * When unspecified or empty string, core API group is inferred.
         */
        group?: string;
        /**
         * Kind is the Kubernetes resource kind of the referent. For example
         * "Service".
         *
         * Defaults to "Service" when not specified.
         *
         * ExternalName services can refer to CNAME DNS records that may live
         * outside of the cluster and as such are difficult to reason about in
         * terms of conformance. They also may not be safe to forward to (see
         * CVE-2021-25740 for more information). Implementations SHOULD NOT
         * support ExternalName Services.
         *
         * Support: Core (Services with a type other than ExternalName)
         *
         * Support: Implementation-specific (Services with type ExternalName)
         */
        kind?: string;
        /**
         * Name is the name of the referent.
         */
        name: string;
        /**
         * Namespace is the namespace of the backend. When unspecified, the local
         * namespace is inferred.
         *
         * Note that when a namespace different than the local namespace is specified,
         * a ReferenceGrant object is required in the referent namespace to allow that
         * namespace's owner to accept the reference. See the ReferenceGrant
         * documentation for details.
         *
         * Support: Core
         */
        namespace?: string;
        /**
         * Port specifies the destination port number to use for this resource.
         * Port is required when the referent is a Kubernetes Service. In this
         * case, the port number is the service port number, not the target port.
         * For other resources, destination port might be derived from the referent
         * resource or this field.
         */
        port?: number;
        /**
         * Weight specifies the proportion of requests forwarded to the referenced
         * backend. This is computed as weight/(sum of all weights in this
         * BackendRefs list). For non-zero values, there may be some epsilon from
         * the exact proportion defined here depending on the precision an
         * implementation supports. Weight is not a percentage and the sum of
         * weights does not need to equal 100.
         *
         * If only one backend is specified and it has a weight greater than 0, 100%
         * of the traffic is forwarded to that backend. If weight is set to 0, no
         * traffic should be forwarded for this entry. If unspecified, weight
         * defaults to 1.
         *
         * Support for this field varies based on the context where used.
         */
        weight?: number;
        [k: string]: unknown;
      }[];
      /**
       * Name is the name of the route rule. This name MUST be unique within a Route if it is set.
       */
      name?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  /**
   * Status defines the current state of TLSRoute.
   */
  status?: {
    /**
     * Parents is a list of parent resources (usually Gateways) that are
     * associated with the route, and the status of the route with respect to
     * each parent. When this route attaches to a parent, the controller that
     * manages the parent must add an entry to this list when the controller
     * first sees the route and should update the entry as appropriate when the
     * route or gateway is modified.
     *
     * Note that parent references that cannot be resolved by an implementation
     * of this API will not be added to this list. Implementations of this API
     * can only populate Route status for the Gateways/parent resources they are
     * responsible for.
     *
     * A maximum of 32 Gateways will be represented in this list. An empty list
     * means the route has not been attached to any Gateway.
     *
     * @maxItems 32
     */
    parents: {
      /**
       * Conditions describes the status of the route with respect to the Gateway.
       * Note that the route's availability is also subject to the Gateway's own
       * status conditions and listener status.
       *
       * If the Route's ParentRef specifies an existing Gateway that supports
       * Routes of this kind AND that Gateway's controller has sufficient access,
       * then that Gateway's controller MUST set the "Accepted" condition on the
       * Route, to indicate whether the route has been accepted or rejected by the
       * Gateway, and why.
       *
       * A Route MUST be considered "Accepted" if at least one of the Route's
       * rules is implemented by the Gateway.
       *
       * There are a number of cases where the "Accepted" condition may not be set
       * due to lack of controller visibility, that includes when:
       *
       * * The Route refers to a nonexistent parent.
       * * The Route is of a type that the controller does not support.
       * * The Route is in a namespace to which the controller does not have access.
       *
       * @minItems 1
       * @maxItems 8
       */
      conditions: {
        /**
         * lastTransitionTime is the last time the condition transitioned from one status to another.
         * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
         */
        lastTransitionTime: string;
        /**
         * message is a human readable message indicating details about the transition.
         * This may be an empty string.
         */
        message: string;
        /**
         * observedGeneration represents the .metadata.generation that the condition was set based upon.
         * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
         * with respect to the current state of the instance.
         */
        observedGeneration?: number;
        /**
         * reason contains a programmatic identifier indicating the reason for the condition's last transition.
         * Producers of specific condition types may define expected values and meanings for this field,
         * and whether the values are considered a guaranteed API.
         * The value should be a CamelCase string.
         * This field may not be empty.
         */
        reason: string;
        /**
         * status of the condition, one of True, False, Unknown.
         */
        status: 'True' | 'False' | 'Unknown';
        /**
         * type of condition in CamelCase or in foo.example.com/CamelCase.
         */
        type: string;
        [k: string]: unknown;
      }[];
      /**
       * ControllerName is a domain/path string that indicates the name of the
       * controller that wrote this status. This corresponds with the
       * controllerName field on GatewayClass.
       *
       * Example: "example.net/gateway-controller".
       *
       * The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are
       * valid Kubernetes names
       * (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
       *
       * Controllers MUST populate this field when writing status. Controllers should ensure that
       * entries to status populated with their ControllerName are cleaned up when they are no
       * longer necessary.
       */
      controllerName: string;
      /**
       * ParentRef corresponds with a ParentRef in the spec that this
       * RouteParentStatus struct describes the status of.
       */
      parentRef: {
        /**
         * Group is the group of the referent.
         * When unspecified, "gateway.networking.k8s.io" is inferred.
         * To set the core API group (such as for a "Service" kind referent),
         * Group must be explicitly set to "" (empty string).
         *
         * Support: Core
         */
        group?: string;
        /**
         * Kind is kind of the referent.
         *
         * There are two kinds of parent resources with "Core" support:
         *
         * * Gateway (Gateway conformance profile)
         * * Service (Mesh conformance profile, ClusterIP Services only)
         *
         * Support for other resources is Implementation-Specific.
         */
        kind?: string;
        /**
         * Name is the name of the referent.
         *
         * Support: Core
         */
        name: string;
        /**
         * Namespace is the namespace of the referent. When unspecified, this refers
         * to the local namespace of the Route.
         *
         * Note that there are specific rules for ParentRefs which cross namespace
         * boundaries. Cross-namespace references are only valid if they are explicitly
         * allowed by something in the namespace they are referring to. For example:
         * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
         * generic way to enable any other kind of cross-namespace reference.
         *
         * Support: Core
         */
        namespace?: string;
        /**
         * Port is the network port this Route targets. It can be interpreted
         * differently based on the type of parent resource.
         *
         * When the parent resource is a Gateway, this targets all listeners
         * listening on the specified port that also support this kind of Route(and
         * select this Route). It's not recommended to set `Port` unless the
         * networking behaviors specified in a Route must apply to a specific port
         * as opposed to a listener(s) whose port(s) may be changed. When both Port
         * and SectionName are specified, the name and port of the selected listener
         * must match both specified values.
         *
         * Implementations MAY choose to support other parent resources.
         * Implementations supporting other types of parent resources MUST clearly
         * document how/if Port is interpreted.
         *
         * For the purpose of status, an attachment is considered successful as
         * long as the parent resource accepts it partially. For example, Gateway
         * listeners can restrict which Routes can attach to them by Route kind,
         * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
         * from the referencing Route, the Route MUST be considered successfully
         * attached. If no Gateway listeners accept attachment from this Route,
         * the Route MUST be considered detached from the Gateway.
         *
         * Support: Extended
         */
        port?: number;
        /**
         * SectionName is the name of a section within the target resource. In the
         * following resources, SectionName is interpreted as the following:
         *
         * * Gateway: Listener name. When both Port (experimental) and SectionName
         * are specified, the name and port of the selected listener must match
         * both specified values.
         * * Service: Port name. When both Port (experimental) and SectionName
         * are specified, the name and port of the selected listener must match
         * both specified values.
         *
         * Implementations MAY choose to support attaching Routes to other resources.
         * If that is the case, they MUST clearly document how SectionName is
         * interpreted.
         *
         * When unspecified (empty string), this will reference the entire resource.
         * For the purpose of status, an attachment is considered successful if at
         * least one section in the parent resource accepts it. For example, Gateway
         * listeners can restrict which Routes can attach to them by Route kind,
         * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
         * the referencing Route, the Route MUST be considered successfully
         * attached. If no Gateway listeners accept attachment from this Route, the
         * Route MUST be considered detached from the Gateway.
         *
         * Support: Core
         */
        sectionName?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
