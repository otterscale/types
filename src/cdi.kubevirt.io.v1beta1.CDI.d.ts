/** Generated from Remote JSON Schema for cdi.kubevirt.io.v1beta1.CDI */

/**
 * CDI is the CDI Operator CRD
 */
export interface CdiKubevirtIoV1Beta1CDI {
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
   * CDISpec defines our specification for the CDI installation
   */
  spec: {
    /**
     * certificate configuration
     */
    certConfig?: {
      /**
       * CA configuration
       * CA certs are kept in the CA bundle as long as they are valid
       */
      ca?: {
        /**
         * The requested 'duration' (i.e. lifetime) of the Certificate.
         */
        duration?: string;
        /**
         * The amount of time before the currently issued certificate's `notAfter`
         * time that we will begin to attempt to renew the certificate.
         */
        renewBefore?: string;
        [k: string]: unknown;
      };
      /**
       * Client configuration
       * Certs are rotated and discarded
       */
      client?: {
        /**
         * The requested 'duration' (i.e. lifetime) of the Certificate.
         */
        duration?: string;
        /**
         * The amount of time before the currently issued certificate's `notAfter`
         * time that we will begin to attempt to renew the certificate.
         */
        renewBefore?: string;
        [k: string]: unknown;
      };
      /**
       * Server configuration
       * Certs are rotated and discarded
       */
      server?: {
        /**
         * The requested 'duration' (i.e. lifetime) of the Certificate.
         */
        duration?: string;
        /**
         * The amount of time before the currently issued certificate's `notAfter`
         * time that we will begin to attempt to renew the certificate.
         */
        renewBefore?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Clone strategy override: should we use a host-assisted copy even if snapshots are available?
     */
    cloneStrategyOverride?: 'copy' | 'snapshot' | 'csi-clone';
    /**
     * CDIConfig at CDI level
     */
    config?: {
      /**
       * DataVolumeTTLSeconds is the time in seconds after DataVolume completion it can be garbage collected. Disabled by default.
       * Deprecated: Removed in v1.62.
       */
      dataVolumeTTLSeconds?: number;
      /**
       * FeatureGates are a list of specific enabled feature gates
       */
      featureGates?: string[];
      /**
       * FilesystemOverhead describes the space reserved for overhead when using Filesystem volumes. A value is between 0 and 1, if not defined it is 0.06 (6% overhead)
       */
      filesystemOverhead?: {
        /**
         * Global is how much space of a Filesystem volume should be reserved for overhead. This value is used unless overridden by a more specific value (per storageClass)
         */
        global?: string;
        /**
         * StorageClass specifies how much space of a Filesystem volume should be reserved for safety. The keys are the storageClass and the values are the overhead. This value overrides the global value
         */
        storageClass?: {
          /**
           * Percent is a string that can only be a value between [0,1)
           * (Note: we actually rely on reconcile to reject invalid values)
           */
          [k: string]: string;
        };
        [k: string]: unknown;
      };
      /**
       * The imagePullSecrets used to pull the container images
       */
      imagePullSecrets?: {
        /**
         * Name of the referent.
         * This field is effectively required, but due to backwards compatibility is
         * allowed to be empty. Instances of this type with an empty value here are
         * almost certainly wrong.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        name?: string;
        [k: string]: unknown;
      }[];
      /**
       * ImportProxy contains importer pod proxy configuration.
       */
      importProxy?: {
        /**
         * HTTPProxy is the URL http://<username>:<pswd>@<ip>:<port> of the import proxy for HTTP requests.  Empty means unset and will not result in the import pod env var.
         */
        HTTPProxy?: string;
        /**
         * HTTPSProxy is the URL https://<username>:<pswd>@<ip>:<port> of the import proxy for HTTPS requests.  Empty means unset and will not result in the import pod env var.
         */
        HTTPSProxy?: string;
        /**
         * NoProxy is a comma-separated list of hostnames and/or CIDRs for which the proxy should not be used. Empty means unset and will not result in the import pod env var.
         */
        noProxy?: string;
        /**
         * TrustedCAProxy is the name of a ConfigMap in the cdi namespace that contains a user-provided trusted certificate authority (CA) bundle.
         * The TrustedCAProxy ConfigMap is consumed by the DataImportCron controller for creating cronjobs, and by the import controller referring a copy of the ConfigMap in the import namespace.
         * Here is an example of the ConfigMap (in yaml):
         *
         * apiVersion: v1
         * kind: ConfigMap
         * metadata:
         *   name: my-ca-proxy-cm
         *   namespace: cdi
         * data:
         *   ca.pem: |
         *     -----BEGIN CERTIFICATE-----
         * 	   ... <base64 encoded cert> ...
         * 	   -----END CERTIFICATE-----
         */
        trustedCAProxy?: string;
        [k: string]: unknown;
      };
      /**
       * InsecureRegistries is a list of TLS disabled registries
       */
      insecureRegistries?: string[];
      /**
       * LogVerbosity overrides the default verbosity level used to initialize loggers
       */
      logVerbosity?: number;
      /**
       * ResourceRequirements describes the compute resource requirements.
       */
      podResourceRequirements?: {
        /**
         * Claims lists the names of resources, defined in spec.resourceClaims,
         * that are used by this container.
         *
         * This is an alpha field and requires enabling the
         * DynamicResourceAllocation feature gate.
         *
         * This field is immutable. It can only be set for containers.
         */
        claims?: {
          /**
           * Name must match the name of one entry in pod.spec.resourceClaims of
           * the Pod where this field is used. It makes that resource available
           * inside a container.
           */
          name: string;
          /**
           * Request is the name chosen for a request in the referenced claim.
           * If empty, everything from the claim is made available, otherwise
           * only the result of this request.
           */
          request?: string;
          [k: string]: unknown;
        }[];
        /**
         * Limits describes the maximum amount of compute resources allowed.
         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required.
         * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
         * otherwise to an implementation-defined value. Requests cannot exceed Limits.
         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: unknown;
      };
      /**
       * Preallocation controls whether storage for DataVolumes should be allocated in advance.
       */
      preallocation?: boolean;
      /**
       * Override the storage class to used for scratch space during transfer operations. The scratch space storage class is determined in the following order: 1. value of scratchSpaceStorageClass, if that doesn't exist, use the default storage class, if there is no default storage class, use the storage class of the DataVolume, if no storage class specified, use no storage class for scratch space
       */
      scratchSpaceStorageClass?: string;
      /**
       * TLSSecurityProfile is used by operators to apply cluster-wide TLS security settings to operands.
       */
      tlsSecurityProfile?: {
        /**
         * custom is a user-defined TLS security profile. Be extremely careful using a custom
         * profile as invalid configurations can be catastrophic. An example custom profile
         * looks like this:
         *
         *   ciphers:
         *     - ECDHE-ECDSA-CHACHA20-POLY1305
         *     - ECDHE-RSA-CHACHA20-POLY1305
         *     - ECDHE-RSA-AES128-GCM-SHA256
         *     - ECDHE-ECDSA-AES128-GCM-SHA256
         *   minTLSVersion: VersionTLS11
         */
        custom?: {
          /**
           * ciphers is used to specify the cipher algorithms that are negotiated
           * during the TLS handshake.  Operators may remove entries their operands
           * do not support.  For example, to use DES-CBC3-SHA  (yaml):
           *
           *   ciphers:
           *     - DES-CBC3-SHA
           */
          ciphers: string[];
          /**
           * minTLSVersion is used to specify the minimal version of the TLS protocol
           * that is negotiated during the TLS handshake. For example, to use TLS
           * versions 1.1, 1.2 and 1.3 (yaml):
           *
           *   minTLSVersion: VersionTLS11
           *
           * NOTE: currently the highest minTLSVersion allowed is VersionTLS12
           */
          minTLSVersion: 'VersionTLS10' | 'VersionTLS11' | 'VersionTLS12' | 'VersionTLS13';
          [k: string]: unknown;
        };
        /**
         * intermediate is a TLS security profile based on:
         *
         * https://wiki.mozilla.org/Security/Server_Side_TLS#Intermediate_compatibility_.28recommended.29
         *
         * and looks like this (yaml):
         *
         *   ciphers:
         *     - TLS_AES_128_GCM_SHA256
         *     - TLS_AES_256_GCM_SHA384
         *     - TLS_CHACHA20_POLY1305_SHA256
         *     - ECDHE-ECDSA-AES128-GCM-SHA256
         *     - ECDHE-RSA-AES128-GCM-SHA256
         *     - ECDHE-ECDSA-AES256-GCM-SHA384
         *     - ECDHE-RSA-AES256-GCM-SHA384
         *     - ECDHE-ECDSA-CHACHA20-POLY1305
         *     - ECDHE-RSA-CHACHA20-POLY1305
         *     - DHE-RSA-AES128-GCM-SHA256
         *     - DHE-RSA-AES256-GCM-SHA384
         *   minTLSVersion: VersionTLS12
         */
        intermediate?: {
          [k: string]: unknown;
        };
        /**
         * modern is a TLS security profile based on:
         *
         * https://wiki.mozilla.org/Security/Server_Side_TLS#Modern_compatibility
         *
         * and looks like this (yaml):
         *
         *   ciphers:
         *     - TLS_AES_128_GCM_SHA256
         *     - TLS_AES_256_GCM_SHA384
         *     - TLS_CHACHA20_POLY1305_SHA256
         *   minTLSVersion: VersionTLS13
         *
         * NOTE: Currently unsupported.
         */
        modern?: {
          [k: string]: unknown;
        };
        /**
         * old is a TLS security profile based on:
         *
         * https://wiki.mozilla.org/Security/Server_Side_TLS#Old_backward_compatibility
         *
         * and looks like this (yaml):
         *
         *   ciphers:
         *     - TLS_AES_128_GCM_SHA256
         *     - TLS_AES_256_GCM_SHA384
         *     - TLS_CHACHA20_POLY1305_SHA256
         *     - ECDHE-ECDSA-AES128-GCM-SHA256
         *     - ECDHE-RSA-AES128-GCM-SHA256
         *     - ECDHE-ECDSA-AES256-GCM-SHA384
         *     - ECDHE-RSA-AES256-GCM-SHA384
         *     - ECDHE-ECDSA-CHACHA20-POLY1305
         *     - ECDHE-RSA-CHACHA20-POLY1305
         *     - DHE-RSA-AES128-GCM-SHA256
         *     - DHE-RSA-AES256-GCM-SHA384
         *     - DHE-RSA-CHACHA20-POLY1305
         *     - ECDHE-ECDSA-AES128-SHA256
         *     - ECDHE-RSA-AES128-SHA256
         *     - ECDHE-ECDSA-AES128-SHA
         *     - ECDHE-RSA-AES128-SHA
         *     - ECDHE-ECDSA-AES256-SHA384
         *     - ECDHE-RSA-AES256-SHA384
         *     - ECDHE-ECDSA-AES256-SHA
         *     - ECDHE-RSA-AES256-SHA
         *     - DHE-RSA-AES128-SHA256
         *     - DHE-RSA-AES256-SHA256
         *     - AES128-GCM-SHA256
         *     - AES256-GCM-SHA384
         *     - AES128-SHA256
         *     - AES256-SHA256
         *     - AES128-SHA
         *     - AES256-SHA
         *     - DES-CBC3-SHA
         *   minTLSVersion: VersionTLS10
         */
        old?: {
          [k: string]: unknown;
        };
        /**
         * type is one of Old, Intermediate, Modern or Custom. Custom provides
         * the ability to specify individual TLS security profile parameters.
         * Old, Intermediate and Modern are TLS security profiles based on:
         *
         * https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations
         *
         * The profiles are intent based, so they may change over time as new ciphers are developed and existing ciphers
         * are found to be insecure.  Depending on precisely which ciphers are available to a process, the list may be
         * reduced.
         *
         * Note that the Modern profile is currently not supported because it is not
         * yet well adopted by common software libraries.
         */
        type?: 'Old' | 'Intermediate' | 'Modern' | 'Custom';
        [k: string]: unknown;
      };
      /**
       * Override the URL used when uploading to a DataVolume
       */
      uploadProxyURLOverride?: string;
      [k: string]: unknown;
    };
    /**
     * CustomizeComponents defines patches for components deployed by the CDI operator.
     */
    customizeComponents?: {
      /**
       * Configure the value used for deployment and daemonset resources
       */
      flags?: {
        api?: {
          [k: string]: string;
        };
        controller?: {
          [k: string]: string;
        };
        uploadProxy?: {
          [k: string]: string;
        };
        [k: string]: unknown;
      };
      patches?: {
        patch: string;
        resourceName: string;
        resourceType: string;
        /**
         * PatchType defines the patch type.
         */
        type: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * PullPolicy describes a policy for if/when to pull a container image
     */
    imagePullPolicy?: 'Always' | 'IfNotPresent' | 'Never';
    /**
     * Selectors and tolerations that should apply to cdi infrastructure components
     */
    infra?: {
      /**
       * affinity enables pod affinity/anti-affinity placement expanding the types of constraints
       * that can be expressed with nodeSelector.
       * affinity is going to be applied to the relevant kind of pods in parallel with nodeSelector
       * See https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity
       */
      affinity?: {
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        nodeAffinity?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy
           * the affinity expressions specified by this field, but it may choose
           * a node that violates one or more of the expressions. The node that is
           * most preferred is the one with the greatest sum of weights, i.e.
           * for each node that meets all of the scheduling requirements (resource
           * request, requiredDuringScheduling affinity expressions, etc.),
           * compute a sum by iterating through the elements of this field and adding
           * "weight" to the sum if the node matches the corresponding matchExpressions; the
           * node(s) with the highest sum are the most preferred.
           */
          preferredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * A node selector term, associated with the corresponding weight.
             */
            preference: {
              /**
               * A list of node selector requirements by node's labels.
               */
              matchExpressions?: {
                /**
                 * The label key that the selector applies to.
                 */
                key: string;
                /**
                 * Represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                operator: string;
                /**
                 * An array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. If the operator is Gt or Lt, the values
                 * array must have a single element, which will be interpreted as an integer.
                 * This array is replaced during a strategic merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              /**
               * A list of node selector requirements by node's fields.
               */
              matchFields?: {
                /**
                 * The label key that the selector applies to.
                 */
                key: string;
                /**
                 * Represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                operator: string;
                /**
                 * An array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. If the operator is Gt or Lt, the values
                 * array must have a single element, which will be interpreted as an integer.
                 * This array is replaced during a strategic merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
            [k: string]: unknown;
          }[];
          /**
           * If the affinity requirements specified by this field are not met at
           * scheduling time, the pod will not be scheduled onto the node.
           * If the affinity requirements specified by this field cease to be met
           * at some point during pod execution (e.g. due to an update), the system
           * may or may not try to eventually evict the pod from its node.
           */
          requiredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            nodeSelectorTerms: {
              /**
               * A list of node selector requirements by node's labels.
               */
              matchExpressions?: {
                /**
                 * The label key that the selector applies to.
                 */
                key: string;
                /**
                 * Represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                operator: string;
                /**
                 * An array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. If the operator is Gt or Lt, the values
                 * array must have a single element, which will be interpreted as an integer.
                 * This array is replaced during a strategic merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              /**
               * A list of node selector requirements by node's fields.
               */
              matchFields?: {
                /**
                 * The label key that the selector applies to.
                 */
                key: string;
                /**
                 * Represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                operator: string;
                /**
                 * An array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. If the operator is Gt or Lt, the values
                 * array must have a single element, which will be interpreted as an integer.
                 * This array is replaced during a strategic merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        podAffinity?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy
           * the affinity expressions specified by this field, but it may choose
           * a node that violates one or more of the expressions. The node that is
           * most preferred is the one with the greatest sum of weights, i.e.
           * for each node that meets all of the scheduling requirements (resource
           * request, requiredDuringScheduling affinity expressions, etc.),
           * compute a sum by iterating through the elements of this field and adding
           * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
           * node(s) with the highest sum are the most preferred.
           */
          preferredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            podAffinityTerm: {
              /**
               * A label query over a set of resources, in this case pods.
               * If it's null, this PodAffinityTerm matches with no Pods.
               */
              labelSelector?: {
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
              /**
               * MatchLabelKeys is a set of pod label keys to select which pods will
               * be taken into consideration. The keys are used to lookup values from the
               * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
               * to select the group of existing pods which pods will be taken into consideration
               * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
               * pod labels will be ignored. The default value is empty.
               * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
               * Also, matchLabelKeys cannot be set when labelSelector isn't set.
               * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
               */
              matchLabelKeys?: string[];
              /**
               * MismatchLabelKeys is a set of pod label keys to select which pods will
               * be taken into consideration. The keys are used to lookup values from the
               * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
               * to select the group of existing pods which pods will be taken into consideration
               * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
               * pod labels will be ignored. The default value is empty.
               * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
               * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
               * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
               */
              mismatchLabelKeys?: string[];
              /**
               * A label query over the set of namespaces that the term applies to.
               * The term is applied to the union of the namespaces selected by this field
               * and the ones listed in the namespaces field.
               * null selector and null or empty namespaces list means "this pod's namespace".
               * An empty selector ({}) matches all namespaces.
               */
              namespaceSelector?: {
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
              /**
               * namespaces specifies a static list of namespace names that the term applies to.
               * The term is applied to the union of the namespaces listed in this field
               * and the ones selected by namespaceSelector.
               * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              namespaces?: string[];
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
               * the labelSelector in the specified namespaces, where co-located is defined as running on a node
               * whose value of the label with key topologyKey matches that of any node on which any of the
               * selected pods is running.
               * Empty topologyKey is not allowed.
               */
              topologyKey: string;
              [k: string]: unknown;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight: number;
            [k: string]: unknown;
          }[];
          /**
           * If the affinity requirements specified by this field are not met at
           * scheduling time, the pod will not be scheduled onto the node.
           * If the affinity requirements specified by this field cease to be met
           * at some point during pod execution (e.g. due to a pod label update), the
           * system may or may not try to eventually evict the pod from its node.
           * When there are multiple elements, the lists of nodes corresponding to each
           * podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          requiredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * A label query over a set of resources, in this case pods.
             * If it's null, this PodAffinityTerm matches with no Pods.
             */
            labelSelector?: {
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
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
             */
            matchLabelKeys?: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
             */
            mismatchLabelKeys?: string[];
            /**
             * A label query over the set of namespaces that the term applies to.
             * The term is applied to the union of the namespaces selected by this field
             * and the ones listed in the namespaces field.
             * null selector and null or empty namespaces list means "this pod's namespace".
             * An empty selector ({}) matches all namespaces.
             */
            namespaceSelector?: {
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
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        podAntiAffinity?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy
           * the anti-affinity expressions specified by this field, but it may choose
           * a node that violates one or more of the expressions. The node that is
           * most preferred is the one with the greatest sum of weights, i.e.
           * for each node that meets all of the scheduling requirements (resource
           * request, requiredDuringScheduling anti-affinity expressions, etc.),
           * compute a sum by iterating through the elements of this field and adding
           * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
           * node(s) with the highest sum are the most preferred.
           */
          preferredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            podAffinityTerm: {
              /**
               * A label query over a set of resources, in this case pods.
               * If it's null, this PodAffinityTerm matches with no Pods.
               */
              labelSelector?: {
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
              /**
               * MatchLabelKeys is a set of pod label keys to select which pods will
               * be taken into consideration. The keys are used to lookup values from the
               * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
               * to select the group of existing pods which pods will be taken into consideration
               * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
               * pod labels will be ignored. The default value is empty.
               * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
               * Also, matchLabelKeys cannot be set when labelSelector isn't set.
               * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
               */
              matchLabelKeys?: string[];
              /**
               * MismatchLabelKeys is a set of pod label keys to select which pods will
               * be taken into consideration. The keys are used to lookup values from the
               * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
               * to select the group of existing pods which pods will be taken into consideration
               * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
               * pod labels will be ignored. The default value is empty.
               * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
               * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
               * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
               */
              mismatchLabelKeys?: string[];
              /**
               * A label query over the set of namespaces that the term applies to.
               * The term is applied to the union of the namespaces selected by this field
               * and the ones listed in the namespaces field.
               * null selector and null or empty namespaces list means "this pod's namespace".
               * An empty selector ({}) matches all namespaces.
               */
              namespaceSelector?: {
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
              /**
               * namespaces specifies a static list of namespace names that the term applies to.
               * The term is applied to the union of the namespaces listed in this field
               * and the ones selected by namespaceSelector.
               * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              namespaces?: string[];
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
               * the labelSelector in the specified namespaces, where co-located is defined as running on a node
               * whose value of the label with key topologyKey matches that of any node on which any of the
               * selected pods is running.
               * Empty topologyKey is not allowed.
               */
              topologyKey: string;
              [k: string]: unknown;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight: number;
            [k: string]: unknown;
          }[];
          /**
           * If the anti-affinity requirements specified by this field are not met at
           * scheduling time, the pod will not be scheduled onto the node.
           * If the anti-affinity requirements specified by this field cease to be met
           * at some point during pod execution (e.g. due to a pod label update), the
           * system may or may not try to eventually evict the pod from its node.
           * When there are multiple elements, the lists of nodes corresponding to each
           * podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          requiredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * A label query over a set of resources, in this case pods.
             * If it's null, this PodAffinityTerm matches with no Pods.
             */
            labelSelector?: {
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
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
             */
            matchLabelKeys?: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
             */
            mismatchLabelKeys?: string[];
            /**
             * A label query over the set of namespaces that the term applies to.
             * The term is applied to the union of the namespaces selected by this field
             * and the ones listed in the namespaces field.
             * null selector and null or empty namespaces list means "this pod's namespace".
             * An empty selector ({}) matches all namespaces.
             */
            namespaceSelector?: {
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
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * ApiserverReplicas set Replicas for cdi-apiserver
       */
      apiServerReplicas?: number;
      /**
       * DeploymentReplicas set Replicas for cdi-deployment
       */
      deploymentReplicas?: number;
      /**
       * nodeSelector is the node selector applied to the relevant kind of pods
       * It specifies a map of key-value pairs: for the pod to be eligible to run on a node,
       * the node must have each of the indicated key-value pairs as labels
       * (it can have additional labels as well).
       * See https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector
       */
      nodeSelector?: {
        [k: string]: string;
      };
      /**
       * tolerations is a list of tolerations applied to the relevant kind of pods
       * See https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ for more info.
       * These are additional tolerations other than default ones.
       */
      tolerations?: {
        /**
         * Effect indicates the taint effect to match. Empty means match all taint effects.
         * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
         */
        effect?: string;
        /**
         * Key is the taint key that the toleration applies to. Empty means match all taint keys.
         * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
         */
        key?: string;
        /**
         * Operator represents a key's relationship to the value.
         * Valid operators are Exists and Equal. Defaults to Equal.
         * Exists is equivalent to wildcard for value, so that a pod can
         * tolerate all taints of a particular category.
         */
        operator?: string;
        /**
         * TolerationSeconds represents the period of time the toleration (which must be
         * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
         * it is not set, which means tolerate the taint forever (do not evict). Zero and
         * negative values will be treated as 0 (evict immediately) by the system.
         */
        tolerationSeconds?: number;
        /**
         * Value is the taint value the toleration matches to.
         * If the operator is Exists, the value should be empty, otherwise just a regular string.
         */
        value?: string;
        [k: string]: unknown;
      }[];
      /**
       * UploadproxyReplicas set Replicas for cdi-uploadproxy
       */
      uploadProxyReplicas?: number;
      [k: string]: unknown;
    };
    /**
     * PriorityClass of the CDI control plane
     */
    priorityClass?: string;
    /**
     * CDIUninstallStrategy defines the state to leave CDI on uninstall
     */
    uninstallStrategy?: 'RemoveWorkloads' | 'BlockUninstallIfWorkloadsExist';
    /**
     * Restrict on which nodes CDI workload pods will be scheduled
     */
    workload?: {
      /**
       * affinity enables pod affinity/anti-affinity placement expanding the types of constraints
       * that can be expressed with nodeSelector.
       * affinity is going to be applied to the relevant kind of pods in parallel with nodeSelector
       * See https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity
       */
      affinity?: {
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        nodeAffinity?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy
           * the affinity expressions specified by this field, but it may choose
           * a node that violates one or more of the expressions. The node that is
           * most preferred is the one with the greatest sum of weights, i.e.
           * for each node that meets all of the scheduling requirements (resource
           * request, requiredDuringScheduling affinity expressions, etc.),
           * compute a sum by iterating through the elements of this field and adding
           * "weight" to the sum if the node matches the corresponding matchExpressions; the
           * node(s) with the highest sum are the most preferred.
           */
          preferredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * A node selector term, associated with the corresponding weight.
             */
            preference: {
              /**
               * A list of node selector requirements by node's labels.
               */
              matchExpressions?: {
                /**
                 * The label key that the selector applies to.
                 */
                key: string;
                /**
                 * Represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                operator: string;
                /**
                 * An array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. If the operator is Gt or Lt, the values
                 * array must have a single element, which will be interpreted as an integer.
                 * This array is replaced during a strategic merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              /**
               * A list of node selector requirements by node's fields.
               */
              matchFields?: {
                /**
                 * The label key that the selector applies to.
                 */
                key: string;
                /**
                 * Represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                operator: string;
                /**
                 * An array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. If the operator is Gt or Lt, the values
                 * array must have a single element, which will be interpreted as an integer.
                 * This array is replaced during a strategic merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
            [k: string]: unknown;
          }[];
          /**
           * If the affinity requirements specified by this field are not met at
           * scheduling time, the pod will not be scheduled onto the node.
           * If the affinity requirements specified by this field cease to be met
           * at some point during pod execution (e.g. due to an update), the system
           * may or may not try to eventually evict the pod from its node.
           */
          requiredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            nodeSelectorTerms: {
              /**
               * A list of node selector requirements by node's labels.
               */
              matchExpressions?: {
                /**
                 * The label key that the selector applies to.
                 */
                key: string;
                /**
                 * Represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                operator: string;
                /**
                 * An array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. If the operator is Gt or Lt, the values
                 * array must have a single element, which will be interpreted as an integer.
                 * This array is replaced during a strategic merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              /**
               * A list of node selector requirements by node's fields.
               */
              matchFields?: {
                /**
                 * The label key that the selector applies to.
                 */
                key: string;
                /**
                 * Represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                operator: string;
                /**
                 * An array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. If the operator is Gt or Lt, the values
                 * array must have a single element, which will be interpreted as an integer.
                 * This array is replaced during a strategic merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        podAffinity?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy
           * the affinity expressions specified by this field, but it may choose
           * a node that violates one or more of the expressions. The node that is
           * most preferred is the one with the greatest sum of weights, i.e.
           * for each node that meets all of the scheduling requirements (resource
           * request, requiredDuringScheduling affinity expressions, etc.),
           * compute a sum by iterating through the elements of this field and adding
           * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
           * node(s) with the highest sum are the most preferred.
           */
          preferredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            podAffinityTerm: {
              /**
               * A label query over a set of resources, in this case pods.
               * If it's null, this PodAffinityTerm matches with no Pods.
               */
              labelSelector?: {
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
              /**
               * MatchLabelKeys is a set of pod label keys to select which pods will
               * be taken into consideration. The keys are used to lookup values from the
               * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
               * to select the group of existing pods which pods will be taken into consideration
               * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
               * pod labels will be ignored. The default value is empty.
               * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
               * Also, matchLabelKeys cannot be set when labelSelector isn't set.
               * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
               */
              matchLabelKeys?: string[];
              /**
               * MismatchLabelKeys is a set of pod label keys to select which pods will
               * be taken into consideration. The keys are used to lookup values from the
               * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
               * to select the group of existing pods which pods will be taken into consideration
               * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
               * pod labels will be ignored. The default value is empty.
               * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
               * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
               * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
               */
              mismatchLabelKeys?: string[];
              /**
               * A label query over the set of namespaces that the term applies to.
               * The term is applied to the union of the namespaces selected by this field
               * and the ones listed in the namespaces field.
               * null selector and null or empty namespaces list means "this pod's namespace".
               * An empty selector ({}) matches all namespaces.
               */
              namespaceSelector?: {
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
              /**
               * namespaces specifies a static list of namespace names that the term applies to.
               * The term is applied to the union of the namespaces listed in this field
               * and the ones selected by namespaceSelector.
               * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              namespaces?: string[];
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
               * the labelSelector in the specified namespaces, where co-located is defined as running on a node
               * whose value of the label with key topologyKey matches that of any node on which any of the
               * selected pods is running.
               * Empty topologyKey is not allowed.
               */
              topologyKey: string;
              [k: string]: unknown;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight: number;
            [k: string]: unknown;
          }[];
          /**
           * If the affinity requirements specified by this field are not met at
           * scheduling time, the pod will not be scheduled onto the node.
           * If the affinity requirements specified by this field cease to be met
           * at some point during pod execution (e.g. due to a pod label update), the
           * system may or may not try to eventually evict the pod from its node.
           * When there are multiple elements, the lists of nodes corresponding to each
           * podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          requiredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * A label query over a set of resources, in this case pods.
             * If it's null, this PodAffinityTerm matches with no Pods.
             */
            labelSelector?: {
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
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
             */
            matchLabelKeys?: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
             */
            mismatchLabelKeys?: string[];
            /**
             * A label query over the set of namespaces that the term applies to.
             * The term is applied to the union of the namespaces selected by this field
             * and the ones listed in the namespaces field.
             * null selector and null or empty namespaces list means "this pod's namespace".
             * An empty selector ({}) matches all namespaces.
             */
            namespaceSelector?: {
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
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        podAntiAffinity?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy
           * the anti-affinity expressions specified by this field, but it may choose
           * a node that violates one or more of the expressions. The node that is
           * most preferred is the one with the greatest sum of weights, i.e.
           * for each node that meets all of the scheduling requirements (resource
           * request, requiredDuringScheduling anti-affinity expressions, etc.),
           * compute a sum by iterating through the elements of this field and adding
           * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
           * node(s) with the highest sum are the most preferred.
           */
          preferredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            podAffinityTerm: {
              /**
               * A label query over a set of resources, in this case pods.
               * If it's null, this PodAffinityTerm matches with no Pods.
               */
              labelSelector?: {
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
              /**
               * MatchLabelKeys is a set of pod label keys to select which pods will
               * be taken into consideration. The keys are used to lookup values from the
               * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
               * to select the group of existing pods which pods will be taken into consideration
               * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
               * pod labels will be ignored. The default value is empty.
               * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
               * Also, matchLabelKeys cannot be set when labelSelector isn't set.
               * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
               */
              matchLabelKeys?: string[];
              /**
               * MismatchLabelKeys is a set of pod label keys to select which pods will
               * be taken into consideration. The keys are used to lookup values from the
               * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
               * to select the group of existing pods which pods will be taken into consideration
               * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
               * pod labels will be ignored. The default value is empty.
               * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
               * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
               * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
               */
              mismatchLabelKeys?: string[];
              /**
               * A label query over the set of namespaces that the term applies to.
               * The term is applied to the union of the namespaces selected by this field
               * and the ones listed in the namespaces field.
               * null selector and null or empty namespaces list means "this pod's namespace".
               * An empty selector ({}) matches all namespaces.
               */
              namespaceSelector?: {
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
              /**
               * namespaces specifies a static list of namespace names that the term applies to.
               * The term is applied to the union of the namespaces listed in this field
               * and the ones selected by namespaceSelector.
               * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
               */
              namespaces?: string[];
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
               * the labelSelector in the specified namespaces, where co-located is defined as running on a node
               * whose value of the label with key topologyKey matches that of any node on which any of the
               * selected pods is running.
               * Empty topologyKey is not allowed.
               */
              topologyKey: string;
              [k: string]: unknown;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight: number;
            [k: string]: unknown;
          }[];
          /**
           * If the anti-affinity requirements specified by this field are not met at
           * scheduling time, the pod will not be scheduled onto the node.
           * If the anti-affinity requirements specified by this field cease to be met
           * at some point during pod execution (e.g. due to a pod label update), the
           * system may or may not try to eventually evict the pod from its node.
           * When there are multiple elements, the lists of nodes corresponding to each
           * podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          requiredDuringSchedulingIgnoredDuringExecution?: {
            /**
             * A label query over a set of resources, in this case pods.
             * If it's null, this PodAffinityTerm matches with no Pods.
             */
            labelSelector?: {
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
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
             */
            matchLabelKeys?: string[];
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
             */
            mismatchLabelKeys?: string[];
            /**
             * A label query over the set of namespaces that the term applies to.
             * The term is applied to the union of the namespaces selected by this field
             * and the ones listed in the namespaces field.
             * null selector and null or empty namespaces list means "this pod's namespace".
             * An empty selector ({}) matches all namespaces.
             */
            namespaceSelector?: {
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
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * nodeSelector is the node selector applied to the relevant kind of pods
       * It specifies a map of key-value pairs: for the pod to be eligible to run on a node,
       * the node must have each of the indicated key-value pairs as labels
       * (it can have additional labels as well).
       * See https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector
       */
      nodeSelector?: {
        [k: string]: string;
      };
      /**
       * tolerations is a list of tolerations applied to the relevant kind of pods
       * See https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ for more info.
       * These are additional tolerations other than default ones.
       */
      tolerations?: {
        /**
         * Effect indicates the taint effect to match. Empty means match all taint effects.
         * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
         */
        effect?: string;
        /**
         * Key is the taint key that the toleration applies to. Empty means match all taint keys.
         * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
         */
        key?: string;
        /**
         * Operator represents a key's relationship to the value.
         * Valid operators are Exists and Equal. Defaults to Equal.
         * Exists is equivalent to wildcard for value, so that a pod can
         * tolerate all taints of a particular category.
         */
        operator?: string;
        /**
         * TolerationSeconds represents the period of time the toleration (which must be
         * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
         * it is not set, which means tolerate the taint forever (do not evict). Zero and
         * negative values will be treated as 0 (evict immediately) by the system.
         */
        tolerationSeconds?: number;
        /**
         * Value is the taint value the toleration matches to.
         * If the operator is Exists, the value should be empty, otherwise just a regular string.
         */
        value?: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * CDIStatus defines the status of the installation
   */
  status?: {
    /**
     * A list of current conditions of the resource
     */
    conditions?: {
      lastHeartbeatTime?: string;
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status: string;
      /**
       * ConditionType is the state of the operator's reconciliation functionality.
       */
      type: string;
      [k: string]: unknown;
    }[];
    /**
     * The observed version of the resource
     */
    observedVersion?: string;
    /**
     * The version of the resource as defined by the operator
     */
    operatorVersion?: string;
    /**
     * Phase is the current phase of the deployment
     */
    phase?: string;
    /**
     * The desired version of the resource
     */
    targetVersion?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
