/** Generated from Remote JSON Schema for gateway.networking.k8s.io.v1.ListenerSet */

/**
 * ListenerSet defines a set of additional listeners to attach to an existing Gateway.
 * This resource provides a mechanism to merge multiple listeners into a single Gateway.
 *
 * The parent Gateway must explicitly allow ListenerSet attachment through its
 * AllowedListeners configuration. By default, Gateways do not allow ListenerSet
 * attachment.
 *
 * Routes can attach to a ListenerSet by specifying it as a parentRef, and can
 * optionally target specific listeners using the sectionName field.
 *
 * Policy Attachment:
 * - Policies that attach to a ListenerSet apply to all listeners defined in that resource
 * - Policies do not impact listeners in the parent Gateway
 * - Different ListenerSets attached to the same Gateway can have different policies
 * - If an implementation cannot apply a policy to specific listeners, it should reject the policy
 *
 * ReferenceGrant Semantics:
 * - ReferenceGrants applied to a Gateway are not inherited by child ListenerSets
 * - ReferenceGrants applied to a ListenerSet do not grant permission to the parent Gateway's listeners
 * - A ListenerSet can reference secrets/backends in its own namespace without a ReferenceGrant
 *
 * Gateway Integration:
 *   - The parent Gateway's status will include "AttachedListenerSets"
 *     which is the count of ListenerSets that have successfully attached to a Gateway
 *     A ListenerSet is successfully attached to a Gateway when all the following conditions are met:
 *   - The ListenerSet is selected by the Gateway's AllowedListeners field
 *   - The ListenerSet has a valid ParentRef selecting the Gateway
 *   - The ListenerSet's status has the condition "Accepted: true"
 */
export interface GatewayNetworkingK8SIoV1ListenerSet {
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
   * Spec defines the desired state of ListenerSet.
   */
  spec: {
    /**
     * Listeners associated with this ListenerSet. Listeners define
     * logical endpoints that are bound on this referenced parent Gateway's addresses.
     *
     * Listeners in a `Gateway` and their attached `ListenerSets` are concatenated
     * as a list when programming the underlying infrastructure. Each listener
     * name does not need to be unique across the Gateway and ListenerSets.
     * See ListenerEntry.Name for more details.
     *
     * Implementations MUST treat the parent Gateway as having the merged
     * list of all listeners from itself and attached ListenerSets using
     * the following precedence:
     *
     * 1. "parent" Gateway
     * 2. ListenerSet ordered by creation time (oldest first)
     * 3. ListenerSet ordered alphabetically by "{namespace}/{name}".
     *
     * An implementation MAY reject listeners by setting the ListenerEntryStatus
     * `Accepted` condition to False with the Reason `TooManyListeners`
     *
     * If a listener has a conflict, this will be reported in the
     * Status.ListenerEntryStatus setting the `Conflicted` condition to True.
     *
     * Implementations SHOULD be cautious about what information from the
     * parent or siblings are reported to avoid accidentally leaking
     * sensitive information that the child would not otherwise have access
     * to. This can include contents of secrets etc.
     *
     * @minItems 1
     * @maxItems 64
     */
    listeners: {
      /**
       * AllowedRoutes defines the types of routes that MAY be attached to a
       * Listener and the trusted namespaces where those Route resources MAY be
       * present.
       *
       * Although a client request may match multiple route rules, only one rule
       * may ultimately receive the request. Matching precedence MUST be
       * determined in order of the following criteria:
       *
       * * The most specific match as defined by the Route type.
       * * The oldest Route based on creation timestamp. For example, a Route with
       *   a creation timestamp of "2020-09-08 01:02:03" is given precedence over
       *   a Route with a creation timestamp of "2020-09-08 01:02:04".
       * * If everything else is equivalent, the Route appearing first in
       *   alphabetical order (namespace/name) should be given precedence. For
       *   example, foo/bar is given precedence over foo/baz.
       *
       * All valid rules within a Route attached to this Listener should be
       * implemented. Invalid Route rules can be ignored (sometimes that will mean
       * the full Route). If a Route rule transitions from valid to invalid,
       * support for that Route rule should be dropped to ensure consistency. For
       * example, even if a filter specified by a Route rule is invalid, the rest
       * of the rules within that Route should still be supported.
       */
      allowedRoutes?: {
        /**
         * Kinds specifies the groups and kinds of Routes that are allowed to bind
         * to this Gateway Listener. When unspecified or empty, the kinds of Routes
         * selected are determined using the Listener protocol.
         *
         * A RouteGroupKind MUST correspond to kinds of Routes that are compatible
         * with the application protocol specified in the Listener's Protocol field.
         * If an implementation does not support or recognize this resource type, it
         * MUST set the "ResolvedRefs" condition to False for this Listener with the
         * "InvalidRouteKinds" reason.
         *
         * Support: Core
         *
         * @maxItems 8
         */
        kinds?: {
          /**
           * Group is the group of the Route.
           */
          group?: string;
          /**
           * Kind is the kind of the Route.
           */
          kind: string;
          [k: string]: unknown;
        }[];
        /**
         * Namespaces indicates namespaces from which Routes may be attached to this
         * Listener. This is restricted to the namespace of this Gateway by default.
         *
         * Support: Core
         */
        namespaces?: {
          /**
           * From indicates where Routes will be selected for this Gateway. Possible
           * values are:
           *
           * * All: Routes in all namespaces may be used by this Gateway.
           * * Selector: Routes in namespaces selected by the selector may be used by
           *   this Gateway.
           * * Same: Only Routes in the same namespace may be used by this Gateway.
           *
           * Support: Core
           */
          from?: 'All' | 'Selector' | 'Same';
          /**
           * Selector must be specified when From is set to "Selector". In that case,
           * only Routes in Namespaces matching this Selector will be selected by this
           * Gateway. This field is ignored for other values of "From".
           *
           * Support: Core
           */
          selector?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: {
              /**
               * key is the label key that the selector applies to.
               */
              key: string;
              /**
               * operator represents a key's relationship to a set of values.
               * Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              operator: string;
              /**
               * values is an array of string values. If the operator is In or NotIn,
               * the values array must be non-empty. If the operator is Exists or DoesNotExist,
               * the values array must be empty. This array is replaced during a strategic
               * merge patch.
               */
              values?: string[];
              [k: string]: unknown;
            }[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * Hostname specifies the virtual hostname to match for protocol types that
       * define this concept. When unspecified, all hostnames are matched. This
       * field is ignored for protocols that don't require hostname based
       * matching.
       *
       * Implementations MUST apply Hostname matching appropriately for each of
       * the following protocols:
       *
       * * TLS: The Listener Hostname MUST match the SNI.
       * * HTTP: The Listener Hostname MUST match the Host header of the request.
       * * HTTPS: The Listener Hostname SHOULD match at both the TLS and HTTP
       *   protocol layers as described above. If an implementation does not
       *   ensure that both the SNI and Host header match the Listener hostname,
       *   it MUST clearly document that.
       *
       * For HTTPRoute and TLSRoute resources, there is an interaction with the
       * `spec.hostnames` array. When both listener and route specify hostnames,
       * there MUST be an intersection between the values for a Route to be
       * accepted. For more information, refer to the Route specific Hostnames
       * documentation.
       *
       * Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
       * as a suffix match. That means that a match for `*.example.com` would match
       * both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
       */
      hostname?: string;
      /**
       * Name is the name of the Listener. This name MUST be unique within a
       * ListenerSet.
       *
       * Name is not required to be unique across a Gateway and ListenerSets.
       * Routes can attach to a Listener by having a ListenerSet as a parentRef
       * and setting the SectionName
       */
      name: string;
      /**
       * Port is the network port. Multiple listeners may use the
       * same port, subject to the Listener compatibility rules.
       */
      port: number;
      /**
       * Protocol specifies the network protocol this listener expects to receive.
       */
      protocol: string;
      /**
       * TLS is the TLS configuration for the Listener. This field is required if
       * the Protocol field is "HTTPS" or "TLS". It is invalid to set this field
       * if the Protocol field is "HTTP", "TCP", or "UDP".
       *
       * The association of SNIs to Certificate defined in ListenerTLSConfig is
       * defined based on the Hostname field for this listener.
       *
       * The GatewayClass MUST use the longest matching SNI out of all
       * available certificates for any TLS handshake.
       */
      tls?: {
        /**
         * CertificateRefs contains a series of references to Kubernetes objects that
         * contains TLS certificates and private keys. These certificates are used to
         * establish a TLS handshake for requests that match the hostname of the
         * associated listener.
         *
         * A single CertificateRef to a Kubernetes Secret has "Core" support.
         * Implementations MAY choose to support attaching multiple certificates to
         * a Listener, but this behavior is implementation-specific.
         *
         * References to a resource in different namespace are invalid UNLESS there
         * is a ReferenceGrant in the target namespace that allows the certificate
         * to be attached. If a ReferenceGrant does not allow this reference, the
         * "ResolvedRefs" condition MUST be set to False for this listener with the
         * "RefNotPermitted" reason.
         *
         * This field is required to have at least one element when the mode is set
         * to "Terminate" (default) and is optional otherwise.
         *
         * CertificateRefs can reference to standard Kubernetes resources, i.e.
         * Secret, or implementation-specific custom resources.
         *
         * Support: Core - A single reference to a Kubernetes Secret of type kubernetes.io/tls
         *
         * Support: Implementation-specific (More than one reference or other resource types)
         *
         * @maxItems 64
         */
        certificateRefs?: {
          /**
           * Group is the group of the referent. For example, "gateway.networking.k8s.io".
           * When unspecified or empty string, core API group is inferred.
           */
          group?: string;
          /**
           * Kind is kind of the referent. For example "Secret".
           */
          kind?: string;
          /**
           * Name is the name of the referent.
           */
          name: string;
          /**
           * Namespace is the namespace of the referenced object. When unspecified, the local
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
          [k: string]: unknown;
        }[];
        /**
         * Mode defines the TLS behavior for the TLS session initiated by the client.
         * There are two possible modes:
         *
         * - Terminate: The TLS session between the downstream client and the
         *   Gateway is terminated at the Gateway. This mode requires certificates
         *   to be specified in some way, such as populating the certificateRefs
         *   field.
         * - Passthrough: The TLS session is NOT terminated by the Gateway. This
         *   implies that the Gateway can't decipher the TLS stream except for
         *   the ClientHello message of the TLS protocol. The certificateRefs field
         *   is ignored in this mode.
         *
         * Support: Core
         */
        mode?: 'Terminate' | 'Passthrough';
        /**
         * Options are a list of key/value pairs to enable extended TLS
         * configuration for each implementation. For example, configuring the
         * minimum TLS version or supported cipher suites.
         *
         * A set of common keys MAY be defined by the API in the future. To avoid
         * any ambiguity, implementation-specific definitions MUST use
         * domain-prefixed names, such as `example.com/my-custom-option`.
         * Un-prefixed names are reserved for key names defined by Gateway API.
         *
         * Support: Implementation-specific
         */
        options?: {
          /**
           * AnnotationValue is the value of an annotation in Gateway API. This is used
           * for validation of maps such as TLS options. This roughly matches Kubernetes
           * annotation validation, although the length validation in that case is based
           * on the entire size of the annotations struct.
           */
          [k: string]: string;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    /**
     * ParentRef references the Gateway that the listeners are attached to.
     */
    parentRef: {
      /**
       * Group is the group of the referent.
       */
      group?: string;
      /**
       * Kind is kind of the referent. For example "Gateway".
       */
      kind?: string;
      /**
       * Name is the name of the referent.
       */
      name: string;
      /**
       * Namespace is the namespace of the referent.  If not present,
       * the namespace of the referent is assumed to be the same as
       * the namespace of the referring object.
       */
      namespace?: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * Status defines the current state of ListenerSet.
   */
  status?: {
    /**
     * Conditions describe the current conditions of the ListenerSet.
     *
     * Implementations MUST express ListenerSet conditions using the
     * `ListenerSetConditionType` and `ListenerSetConditionReason`
     * constants so that operators and tools can converge on a common
     * vocabulary to describe ListenerSet state.
     *
     * Known condition types are:
     *
     * * "Accepted"
     * * "Programmed"
     *
     * @maxItems 8
     */
    conditions?: {
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
     * Listeners provide status for each unique listener port defined in the Spec.
     *
     * @maxItems 64
     */
    listeners?: {
      /**
       * AttachedRoutes represents the total number of Routes that have been
       * successfully attached to this Listener.
       *
       * Successful attachment of a Route to a Listener is based solely on the
       * combination of the AllowedRoutes field on the corresponding Listener
       * and the Route's ParentRefs field. A Route is successfully attached to
       * a Listener when it is selected by the Listener's AllowedRoutes field
       * AND the Route has a valid ParentRef selecting the whole Gateway
       * resource or a specific Listener as a parent resource (more detail on
       * attachment semantics can be found in the documentation on the various
       * Route kinds ParentRefs fields). Listener status does not impact
       * successful attachment, i.e. the AttachedRoutes field count MUST be set
       * for Listeners, even if the Accepted condition of an individual Listener is set
       * to "False". The AttachedRoutes number represents the number of Routes with
       * the Accepted condition set to "True" that have been attached to this Listener.
       * Routes with any other value for the Accepted condition MUST NOT be included
       * in this count.
       *
       * Uses for this field include troubleshooting Route attachment and
       * measuring blast radius/impact of changes to a Listener.
       */
      attachedRoutes: number;
      /**
       * Conditions describe the current condition of this listener.
       *
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
       * Name is the name of the Listener that this status corresponds to.
       */
      name: string;
      /**
       * SupportedKinds is the list indicating the Kinds supported by this
       * listener. This MUST represent the kinds supported by an implementation for
       * that Listener configuration.
       *
       * If kinds are specified in Spec that are not supported, they MUST NOT
       * appear in this list and an implementation MUST set the "ResolvedRefs"
       * condition to "False" with the "InvalidRouteKinds" reason. If both valid
       * and invalid Route kinds are specified, the implementation MUST
       * reference the valid Route kinds that have been specified.
       *
       * @maxItems 8
       */
      supportedKinds?: {
        /**
         * Group is the group of the Route.
         */
        group?: string;
        /**
         * Kind is the kind of the Route.
         */
        kind: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
