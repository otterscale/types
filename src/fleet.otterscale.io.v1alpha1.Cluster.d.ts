/** Generated from Remote JSON Schema for fleet.otterscale.io.v1alpha1.Cluster */

/**
 * Cluster is the Schema for the clusters API.
 * A Cluster represents a Talos Linux Kubernetes cluster provisioned on bare metal
 * via Metal3 BareMetalHost resources.
 */
export interface FleetOtterscaleIoV1Alpha1Cluster {
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
   * Spec defines the desired behavior of the Cluster.
   */
  spec: {
    /**
     * ClusterNetwork configures pod, service, and DNS networking.
     */
    clusterNetwork?: {
      /**
       * DNSDomain is the DNS domain used for internal cluster DNS (default: cluster.local).
       */
      dnsDomain?: string;
      /**
       * PodSubnets is the list of CIDR ranges for pod IP allocation.
       *
       * @minItems 1
       * @maxItems 4
       */
      podSubnets?: string[];
      /**
       * ServiceSubnets is the list of CIDR ranges for service ClusterIP allocation.
       *
       * @minItems 1
       * @maxItems 4
       */
      serviceSubnets?: string[];
      [k: string]: unknown;
    };
    /**
     * ControlPlaneConfig defines how Talos machine configs are produced for control plane nodes.
     * Individual Machines may override this via their own TalosConfig field.
     */
    controlPlaneConfig?: {
      /**
       * ConfigPatches is a list of RFC 6902 JSON patches applied to the generated config.
       * Ignored when GenerateType is "none".
       */
      configPatches?: {
        /**
         * Op is the patch operation (add, remove, replace, move, copy, test).
         */
        op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
        /**
         * Path is the JSON pointer to the target location.
         */
        path: string;
        /**
         * Value is the value to use in the patch operation (required for add/replace/test).
         */
        value?: {
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      /**
       * Data is the raw Talos machine configuration YAML.
       * Required when GenerateType is "none"; ignored otherwise.
       */
      data?: string;
      /**
       * GenerateType determines how the Talos machine config is produced.
       * "controlplane" auto-generates a control plane config from cluster parameters.
       * "worker" auto-generates a worker (join) config from cluster parameters.
       * "none" expects the user to supply a complete config in the Data field.
       * When omitted, the controller defaults based on the Machine role.
       */
      generateType?: 'controlplane' | 'worker' | 'none';
      [k: string]: unknown;
    };
    /**
     * ControlPlaneEndpoint is the API server endpoint (typically a VIP or load balancer).
     */
    controlPlaneEndpoint: {
      /**
       * Host is the hostname or IP address of the API server.
       */
      host: string;
      /**
       * Port is the port number of the API server.
       */
      port?: number;
      [k: string]: unknown;
    };
    /**
     * KubernetesVersion is the target Kubernetes version (e.g., "v1.32.0").
     */
    kubernetesVersion: string;
    /**
     * TalosImage specifies the Talos OS image written to each BareMetalHost.
     */
    talosImage: {
      /**
       * Checksum is the image checksum or a URL pointing to a checksum file.
       */
      checksum: string;
      /**
       * ChecksumType is the algorithm used for the checksum (sha256, sha512, md5, or auto).
       */
      checksumType?: 'sha256' | 'sha512' | 'md5' | 'auto';
      /**
       * Format is the disk image format (raw, qcow2, or live-iso).
       */
      format?: 'raw' | 'qcow2' | 'live-iso';
      /**
       * URL is the location of the OS image (e.g., HTTP server hosting Talos raw image).
       */
      url: string;
      [k: string]: unknown;
    };
    /**
     * TalosVersion is the Talos OS version to use for config generation (e.g., "v1.9").
     */
    talosVersion: string;
    /**
     * WorkerConfig defines how Talos machine configs are produced for worker nodes.
     * When omitted, defaults to generateType "worker" which auto-generates a join config.
     * Individual Machines may override this via their own TalosConfig field.
     */
    workerConfig?: {
      /**
       * ConfigPatches is a list of RFC 6902 JSON patches applied to the generated config.
       * Ignored when GenerateType is "none".
       */
      configPatches?: {
        /**
         * Op is the patch operation (add, remove, replace, move, copy, test).
         */
        op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
        /**
         * Path is the JSON pointer to the target location.
         */
        path: string;
        /**
         * Value is the value to use in the patch operation (required for add/replace/test).
         */
        value?: {
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      /**
       * Data is the raw Talos machine configuration YAML.
       * Required when GenerateType is "none"; ignored otherwise.
       */
      data?: string;
      /**
       * GenerateType determines how the Talos machine config is produced.
       * "controlplane" auto-generates a control plane config from cluster parameters.
       * "worker" auto-generates a worker (join) config from cluster parameters.
       * "none" expects the user to supply a complete config in the Data field.
       * When omitted, the controller defaults based on the Machine role.
       */
      generateType?: 'controlplane' | 'worker' | 'none';
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * Status represents the current information about the Cluster.
   */
  status?: {
    /**
     * Conditions store the status conditions of the Cluster.
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
     * ControlPlaneReady is true when all control plane Machines are bootstrapped and running.
     */
    controlPlaneReady?: boolean;
    /**
     * Initialized is true once the first control plane node has been bootstrapped
     * and etcd has been initialized.
     */
    initialized?: boolean;
    /**
     * ObservedGeneration is the most recent generation observed by the controller.
     */
    observedGeneration?: number;
    /**
     * Phase is the high-level summary of the cluster lifecycle.
     */
    phase?: 'Pending' | 'Provisioning' | 'Provisioned' | 'Ready' | 'Failed' | 'Deleting';
    /**
     * ReadyWorkers is the count of worker Machines that are ready.
     */
    readyWorkers?: number;
    /**
     * SecretsRef references the Secret containing the Talos secrets bundle.
     */
    secretsRef?: {
      /**
       * Name is the name of the referenced resource.
       */
      name: string;
      /**
       * Namespace is the namespace of the referenced resource.
       * Empty for cluster-scoped resources.
       */
      namespace?: string;
      [k: string]: unknown;
    };
    /**
     * TalosconfigRef references the Secret containing the talosconfig client configuration.
     */
    talosconfigRef?: {
      /**
       * Name is the name of the referenced resource.
       */
      name: string;
      /**
       * Namespace is the namespace of the referenced resource.
       * Empty for cluster-scoped resources.
       */
      namespace?: string;
      [k: string]: unknown;
    };
    /**
     * TotalWorkers is the total count of worker Machines.
     */
    totalWorkers?: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
