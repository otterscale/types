/** Generated from Remote JSON Schema for pool.kubevirt.io.v1alpha1.VirtualMachinePool */

/**
 * VirtualMachinePool resource contains a VirtualMachine configuration
 * that can be used to replicate multiple VirtualMachine resources.
 */
export interface PoolKubevirtIoV1Alpha1VirtualMachinePool {
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
  spec: {
    /**
     * Autohealing specifies when a VMpool should replace a failing VM with a reprovisioned instance
     */
    autohealing?: {
      /**
       * MinFailingToStartDuration is the minimum time a VM must be in a failing status (applies to status conditions like CrashLoopBackOff, Unschedulable) before being replaced.
       * It measures the duration since the VM's Ready condition transitioned to False.
       * Defaults to 5 minutes
       */
      minFailingToStartDuration?: string;
      /**
       * StartUpFailureThreshold is the number of consecutive VMI start failures (it tracks the value of Status.StartFailure.ConsecutiveFailCount field) before replacing the VM.
       * Defaults to 3
       */
      startUpFailureThreshold?: number;
      [k: string]: unknown;
    };
    /**
     * (Defaults to 100%) Integer or string pointer, that when set represents either a percentage or number of VMs in a pool that can be unavailable (ready condition false) at a time during automated update.
     */
    maxUnavailable?: number | string;
    /**
     * Options for the name generation in a pool.
     */
    nameGeneration?: {
      appendIndexToConfigMapRefs?: boolean;
      appendIndexToSecretRefs?: boolean;
      [k: string]: unknown;
    };
    /**
     * Indicates that the pool is paused.
     */
    paused?: boolean;
    /**
     * Number of desired pods. This is a pointer to distinguish between explicit
     * zero and not specified. Defaults to 1.
     */
    replicas?: number;
    /**
     * ScaleInStrategy specifies how the VMPool controller manages scaling in VMs within a VMPool
     */
    scaleInStrategy?: {
      /**
       * Opportunistic scale-in is a strategy when vms are deleted by some other means than the scale-in action.
       * For example, when the VM is deleted by the user or when the VM is deleted by the node that is hosting the VM.
       */
      opportunistic?: {
        /**
         * Specifies if and how to preserve the state of the VMs selected during scale-in.
         * Disabled - (Default) all state for VMs selected for scale-in will be deleted.
         * Offline - PVCs for VMs selected for scale-in will be preserved and reused on scale-out (decreases provisioning time during scale out).
         * Online - PVCs and memory for VMs selected for scale-in will be preserved and reused on scale-out (decreases provisioning and boot time during scale out).
         */
        statePreservation?: 'Disabled' | 'Offline' | 'Online';
        [k: string]: unknown;
      };
      /**
       * Proactive scale-in by forcing VMs to shutdown during scale-in (Default)
       */
      proactive?: {
        /**
         * SelectionPolicy defines the priority in which VM instances are selected for proactive scale-in
         * Defaults to "Random" base policy when no SelectionPolicy is configured
         */
        selectionPolicy?: {
          /**
           * Selectors is a list of selection policies.
           */
          selectors?: {
            /**
             * LabelSelector is a list of label selector for VMs.
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
             * NodeSelectorRequirementMatcher is a list of node selector requirement for VMs.
             */
            nodeSelectorRequirementMatcher?: {
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
           * SortPolicy is a catch-all policy [AscendingOrder|DescendingOrder|Newest|Oldest|Random]
           */
          sortPolicy?: 'AscendingOrder' | 'DescendingOrder' | 'Newest' | 'Oldest' | 'Random';
          [k: string]: unknown;
        };
        /**
         * Specifies if and how to preserve the state of the VMs selected during scale-in.
         * Disabled - (Default) all state for VMs selected for scale-in will be deleted.
         * Offline - PVCs for VMs selected for scale-in will be preserved and reused on scale-out (decreases provisioning time during scale out).
         * Online - PVCs and memory for VMs selected for scale-in will be preserved and reused on scale-out (decreases provisioning and boot time during scale out).
         */
        statePreservation?: 'Disabled' | 'Offline' | 'Online';
        [k: string]: unknown;
      };
      /**
       * The VM is never touched after creation. Users are responsible for scaling in the pool manually.
       */
      unmanaged?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Label selector for pods. Existing Poolss whose pods are
     * selected by this will be the ones affected by this deployment.
     */
    selector: {
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
     * UpdateStrategy specifies how the VMPool controller manages updating VMs within a VMPool
     */
    updateStrategy?: {
      /**
       * Opportunistic update only gets applied to the VM, VMI is updated naturally upon the restart. Whereas proactive it applies both the VM and VMI right away.
       */
      opportunistic?: {
        [k: string]: unknown;
      };
      /**
       * Proactive update by forcing the VMs to restart during update
       */
      proactive?: {
        /**
         * SelectionPolicy defines the priority in which VM instances are selected for proactive update
         * Defaults to "Random" base policy when no SelectionPolicy is configured
         */
        selectionPolicy?: {
          /**
           * Selectors is a list of selection policies.
           */
          selectors?: {
            /**
             * LabelSelector is a list of label selector for VMs.
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
             * NodeSelectorRequirementMatcher is a list of node selector requirement for VMs.
             */
            nodeSelectorRequirementMatcher?: {
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
           * SortPolicy is a catch-all policy [AscendingOrder|DescendingOrder|Newest|Oldest|Random]
           */
          sortPolicy?: 'AscendingOrder' | 'DescendingOrder' | 'Newest' | 'Oldest' | 'Random';
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * Unmanaged indicates that no automatic update of VMs within a VMPool is performed. When this is set, the VMPool controller will not update the VMs within the pool.
       */
      unmanaged?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Template describes the VM that will be created.
     */
    virtualMachineTemplate: {
      metadata?: {
        [k: string]: unknown;
      };
      /**
       * VirtualMachineSpec contains the VirtualMachine specification.
       */
      spec?: {
        /**
         * dataVolumeTemplates is a list of dataVolumes that the VirtualMachineInstance template can reference.
         * DataVolumes in this list are dynamically created for the VirtualMachine and are tied to the VirtualMachine's life-cycle.
         */
        dataVolumeTemplates?: {
          /**
           * APIVersion defines the versioned schema of this representation of an object.
           * Servers should convert recognized schemas to the latest internal value, and
           * may reject unrecognized values.
           * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
           */
          apiVersion?: string;
          /**
           * Kind is a string value representing the REST resource this object represents.
           * Servers may infer this from the endpoint the client submits requests to.
           * Cannot be updated.
           * In CamelCase.
           * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
           */
          kind?: string;
          metadata?: {
            [k: string]: unknown;
          };
          /**
           * DataVolumeSpec contains the DataVolume specification.
           */
          spec: {
            /**
             * Checkpoints is a list of DataVolumeCheckpoints, representing stages in a multistage import.
             */
            checkpoints?: {
              /**
               * Current is the identifier of the snapshot created for this checkpoint.
               */
              current: string;
              /**
               * Previous is the identifier of the snapshot from the previous checkpoint.
               */
              previous: string;
              [k: string]: unknown;
            }[];
            /**
             * DataVolumeContentType options: "kubevirt", "archive"
             */
            contentType?: 'kubevirt' | 'archive';
            /**
             * FinalCheckpoint indicates whether the current DataVolumeCheckpoint is the final checkpoint.
             */
            finalCheckpoint?: boolean;
            /**
             * Preallocation controls whether storage for DataVolumes should be allocated in advance.
             */
            preallocation?: boolean;
            /**
             * PriorityClassName for Importer, Cloner and Uploader pod
             */
            priorityClassName?: string;
            /**
             * PVC is the PVC specification
             */
            pvc?: {
              /**
               * accessModes contains the desired access modes the volume should have.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
               */
              accessModes?: string[];
              /**
               * dataSource field can be used to specify either:
               * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
               * * An existing PVC (PersistentVolumeClaim)
               * If the provisioner or an external controller can support the specified data source,
               * it will create a new volume based on the contents of the specified data source.
               * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
               * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
               * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
               */
              dataSource?: {
                /**
                 * APIGroup is the group for the resource being referenced.
                 * If APIGroup is not specified, the specified Kind must be in the core API group.
                 * For any other third-party types, APIGroup is required.
                 */
                apiGroup?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                kind: string;
                /**
                 * Name is the name of resource being referenced
                 */
                name: string;
                [k: string]: unknown;
              };
              /**
               * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
               * volume is desired. This may be any object from a non-empty API group (non
               * core object) or a PersistentVolumeClaim object.
               * When this field is specified, volume binding will only succeed if the type of
               * the specified object matches some installed volume populator or dynamic
               * provisioner.
               * This field will replace the functionality of the dataSource field and as such
               * if both fields are non-empty, they must have the same value. For backwards
               * compatibility, when namespace isn't specified in dataSourceRef,
               * both fields (dataSource and dataSourceRef) will be set to the same
               * value automatically if one of them is empty and the other is non-empty.
               * When namespace is specified in dataSourceRef,
               * dataSource isn't set to the same value and must be empty.
               * There are three important differences between dataSource and dataSourceRef:
               * * While dataSource only allows two specific types of objects, dataSourceRef
               *   allows any non-core object, as well as PersistentVolumeClaim objects.
               * * While dataSource ignores disallowed values (dropping them), dataSourceRef
               *   preserves all values, and generates an error if a disallowed value is
               *   specified.
               * * While dataSource only allows local objects, dataSourceRef allows objects
               *   in any namespaces.
               * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
               * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
               */
              dataSourceRef?: {
                /**
                 * APIGroup is the group for the resource being referenced.
                 * If APIGroup is not specified, the specified Kind must be in the core API group.
                 * For any other third-party types, APIGroup is required.
                 */
                apiGroup?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                kind: string;
                /**
                 * Name is the name of resource being referenced
                 */
                name: string;
                /**
                 * Namespace is the namespace of resource being referenced
                 * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                 * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                 */
                namespace?: string;
                [k: string]: unknown;
              };
              /**
               * resources represents the minimum resources the volume should have.
               * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
               * that are lower than previous value but must still be higher than capacity recorded in the
               * status field of the claim.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
               */
              resources?: {
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
               * selector is a label query over volumes to consider for binding.
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
              /**
               * storageClassName is the name of the StorageClass required by the claim.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
               */
              storageClassName?: string;
              /**
               * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
               * If specified, the CSI driver will create or update the volume with the attributes defined
               * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
               * it can be changed after the claim is created. An empty string or nil value indicates that no
               * VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state,
               * this field can be reset to its previous value (including nil) to cancel the modification.
               * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
               * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
               * exists.
               * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
               */
              volumeAttributesClassName?: string;
              /**
               * volumeMode defines what type of volume is required by the claim.
               * Value of Filesystem is implied when not included in claim spec.
               */
              volumeMode?: string;
              /**
               * volumeName is the binding reference to the PersistentVolume backing this claim.
               */
              volumeName?: string;
              [k: string]: unknown;
            };
            /**
             * Source is the src of the data for the requested DataVolume
             */
            source?: {
              /**
               * DataVolumeBlankImage provides the parameters to create a new raw blank image for the PVC
               */
              blank?: {
                [k: string]: unknown;
              };
              /**
               * DataVolumeSourceGCS provides the parameters to create a Data Volume from an GCS source
               */
              gcs?: {
                /**
                 * SecretRef provides the secret reference needed to access the GCS source
                 */
                secretRef?: string;
                /**
                 * URL is the url of the GCS source
                 */
                url: string;
                [k: string]: unknown;
              };
              /**
               * DataVolumeSourceHTTP can be either an http or https endpoint, with an optional basic auth user name and password, and an optional configmap containing additional CAs
               */
              http?: {
                /**
                 * CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate
                 */
                certConfigMap?: string;
                /**
                 * ExtraHeaders is a list of strings containing extra headers to include with HTTP transfer requests
                 */
                extraHeaders?: string[];
                /**
                 * SecretExtraHeaders is a list of Secret references, each containing an extra HTTP header that may include sensitive information
                 */
                secretExtraHeaders?: string[];
                /**
                 * SecretRef A Secret reference, the secret should contain accessKeyId (user name) base64 encoded, and secretKey (password) also base64 encoded
                 */
                secretRef?: string;
                /**
                 * URL is the URL of the http(s) endpoint
                 */
                url: string;
                [k: string]: unknown;
              };
              /**
               * DataVolumeSourceImageIO provides the parameters to create a Data Volume from an imageio source
               */
              imageio?: {
                /**
                 * CertConfigMap provides a reference to the CA cert
                 */
                certConfigMap?: string;
                /**
                 * DiskID provides id of a disk to be imported
                 */
                diskId: string;
                /**
                 * InsecureSkipVerify is a flag to skip certificate verification
                 */
                insecureSkipVerify?: boolean;
                /**
                 * SecretRef provides the secret reference needed to access the ovirt-engine
                 */
                secretRef?: string;
                /**
                 * URL is the URL of the ovirt-engine
                 */
                url: string;
                [k: string]: unknown;
              };
              /**
               * DataVolumeSourcePVC provides the parameters to create a Data Volume from an existing PVC
               */
              pvc?: {
                /**
                 * The name of the source PVC
                 */
                name: string;
                /**
                 * The namespace of the source PVC
                 */
                namespace: string;
                [k: string]: unknown;
              };
              /**
               * DataVolumeSourceRegistry provides the parameters to create a Data Volume from an registry source
               */
              registry?: {
                /**
                 * CertConfigMap provides a reference to the Registry certs
                 */
                certConfigMap?: string;
                /**
                 * ImageStream is the name of image stream for import
                 */
                imageStream?: string;
                /**
                 * Platform describes the minimum runtime requirements of the image
                 */
                platform?: {
                  /**
                   * Architecture specifies the image target CPU architecture
                   */
                  architecture?: string;
                  [k: string]: unknown;
                };
                /**
                 * PullMethod can be either "pod" (default import), or "node" (node docker cache based import)
                 */
                pullMethod?: string;
                /**
                 * SecretRef provides the secret reference needed to access the Registry source
                 */
                secretRef?: string;
                /**
                 * URL is the url of the registry source (starting with the scheme: docker, oci-archive)
                 */
                url?: string;
                [k: string]: unknown;
              };
              /**
               * DataVolumeSourceS3 provides the parameters to create a Data Volume from an S3 source
               */
              s3?: {
                /**
                 * CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate
                 */
                certConfigMap?: string;
                /**
                 * SecretRef provides the secret reference needed to access the S3 source
                 */
                secretRef?: string;
                /**
                 * URL is the url of the S3 source
                 */
                url: string;
                [k: string]: unknown;
              };
              /**
               * DataVolumeSourceSnapshot provides the parameters to create a Data Volume from an existing VolumeSnapshot
               */
              snapshot?: {
                /**
                 * The name of the source VolumeSnapshot
                 */
                name: string;
                /**
                 * The namespace of the source VolumeSnapshot
                 */
                namespace: string;
                [k: string]: unknown;
              };
              /**
               * DataVolumeSourceUpload provides the parameters to create a Data Volume by uploading the source
               */
              upload?: {
                [k: string]: unknown;
              };
              /**
               * DataVolumeSourceVDDK provides the parameters to create a Data Volume from a Vmware source
               */
              vddk?: {
                /**
                 * BackingFile is the path to the virtual hard disk to migrate from vCenter/ESXi
                 */
                backingFile?: string;
                /**
                 * ExtraArgs is a reference to a ConfigMap containing extra arguments to pass directly to the VDDK library
                 */
                extraArgs?: string;
                /**
                 * InitImageURL is an optional URL to an image containing an extracted VDDK library, overrides v2v-vmware config map
                 */
                initImageURL?: string;
                /**
                 * SecretRef provides a reference to a secret containing the username and password needed to access the vCenter or ESXi host
                 */
                secretRef?: string;
                /**
                 * Thumbprint is the certificate thumbprint of the vCenter or ESXi host
                 */
                thumbprint?: string;
                /**
                 * URL is the URL of the vCenter or ESXi host with the VM to migrate
                 */
                url?: string;
                /**
                 * UUID is the UUID of the virtual machine that the backing file is attached to in vCenter/ESXi
                 */
                uuid?: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            /**
             * SourceRef is an indirect reference to the source of data for the requested DataVolume
             */
            sourceRef?: {
              /**
               * The kind of the source reference, currently only "DataSource" is supported
               */
              kind: string;
              /**
               * The name of the source reference
               */
              name: string;
              /**
               * The namespace of the source reference, defaults to the DataVolume namespace
               */
              namespace?: string;
              [k: string]: unknown;
            };
            /**
             * Storage is the requested storage specification
             */
            storage?: {
              /**
               * AccessModes contains the desired access modes the volume should have.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
               */
              accessModes?: string[];
              /**
               * This field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) * An existing custom resource that implements data population (Alpha) In order to use custom resource types that implement data population, the AnyVolumeDataSource feature gate must be enabled. If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source.
               * If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
               */
              dataSource?: {
                /**
                 * APIGroup is the group for the resource being referenced.
                 * If APIGroup is not specified, the specified Kind must be in the core API group.
                 * For any other third-party types, APIGroup is required.
                 */
                apiGroup?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                kind: string;
                /**
                 * Name is the name of resource being referenced
                 */
                name: string;
                [k: string]: unknown;
              };
              /**
               * Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner.
               * This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty.
               * There are two important differences between DataSource and DataSourceRef:
               * * While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects.
               * * While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified.
               * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
               */
              dataSourceRef?: {
                /**
                 * APIGroup is the group for the resource being referenced.
                 * If APIGroup is not specified, the specified Kind must be in the core API group.
                 * For any other third-party types, APIGroup is required.
                 */
                apiGroup?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                kind: string;
                /**
                 * Name is the name of resource being referenced
                 */
                name: string;
                /**
                 * Namespace is the namespace of resource being referenced
                 * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                 * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                 */
                namespace?: string;
                [k: string]: unknown;
              };
              /**
               * Resources represents the minimum resources the volume should have.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
               */
              resources?: {
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
               * A label query over volumes to consider for binding.
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
              /**
               * Name of the StorageClass required by the claim.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
               */
              storageClassName?: string;
              /**
               * volumeMode defines what type of volume is required by the claim.
               * Value of Filesystem is implied when not included in claim spec.
               */
              volumeMode?: string;
              /**
               * VolumeName is the binding reference to the PersistentVolume backing this claim.
               */
              volumeName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          /**
           * DataVolumeTemplateDummyStatus is here simply for backwards compatibility with
           * a previous API.
           */
          status?: {
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        /**
         * InstancetypeMatcher references a instancetype that is used to fill fields in Template
         */
        instancetype?: {
          /**
           * InferFromVolume lists the name of a volume that should be used to infer or discover the instancetype
           * to be used through known annotations on the underlying resource. Once applied to the InstancetypeMatcher
           * this field is removed.
           */
          inferFromVolume?: string;
          /**
           * InferFromVolumeFailurePolicy controls what should happen on failure when inferring the instancetype.
           * Allowed values are: "RejectInferFromVolumeFailure" and "IgnoreInferFromVolumeFailure".
           * If not specified, "RejectInferFromVolumeFailure" is used by default.
           */
          inferFromVolumeFailurePolicy?: string;
          /**
           * Kind specifies which instancetype resource is referenced.
           * Allowed values are: "VirtualMachineInstancetype" and "VirtualMachineClusterInstancetype".
           * If not specified, "VirtualMachineClusterInstancetype" is used by default.
           */
          kind?: string;
          /**
           * Name is the name of the VirtualMachineInstancetype or VirtualMachineClusterInstancetype
           */
          name?: string;
          /**
           * RevisionName specifies a ControllerRevision containing a specific copy of the
           * VirtualMachineInstancetype or VirtualMachineClusterInstancetype to be used. This is initially
           * captured the first time the instancetype is applied to the VirtualMachineInstance.
           */
          revisionName?: string;
          [k: string]: unknown;
        };
        /**
         * PreferenceMatcher references a set of preference that is used to fill fields in Template
         */
        preference?: {
          /**
           * InferFromVolume lists the name of a volume that should be used to infer or discover the preference
           * to be used through known annotations on the underlying resource. Once applied to the PreferenceMatcher
           * this field is removed.
           */
          inferFromVolume?: string;
          /**
           * InferFromVolumeFailurePolicy controls what should happen on failure when preference the instancetype.
           * Allowed values are: "RejectInferFromVolumeFailure" and "IgnoreInferFromVolumeFailure".
           * If not specified, "RejectInferFromVolumeFailure" is used by default.
           */
          inferFromVolumeFailurePolicy?: string;
          /**
           * Kind specifies which preference resource is referenced.
           * Allowed values are: "VirtualMachinePreference" and "VirtualMachineClusterPreference".
           * If not specified, "VirtualMachineClusterPreference" is used by default.
           */
          kind?: string;
          /**
           * Name is the name of the VirtualMachinePreference or VirtualMachineClusterPreference
           */
          name?: string;
          /**
           * RevisionName specifies a ControllerRevision containing a specific copy of the
           * VirtualMachinePreference or VirtualMachineClusterPreference to be used. This is
           * initially captured the first time the instancetype is applied to the VirtualMachineInstance.
           */
          revisionName?: string;
          [k: string]: unknown;
        };
        /**
         * Running state indicates the requested running state of the VirtualMachineInstance
         * mutually exclusive with Running
         * Following are allowed values:
         * - "Always": VMI should always be running.
         * - "Halted": VMI should never be running.
         * - "Manual": VMI can be started/stopped using API endpoints.
         * - "RerunOnFailure": VMI will initially be running and restarted if a failure occurs, but will not be restarted upon successful completion.
         * - "Once": VMI will run once and not be restarted upon completion regardless if the completion is of phase Failure or Success.
         */
        runStrategy?: string;
        /**
         * Running controls whether the associatied VirtualMachineInstance is created or not
         * Mutually exclusive with RunStrategy
         * Deprecated: VirtualMachineInstance field "Running" is now deprecated, please use RunStrategy instead.
         */
        running?: boolean;
        /**
         * Template is the direct specification of VirtualMachineInstance
         */
        template: {
          metadata?: {
            [k: string]: unknown;
          };
          /**
           * VirtualMachineInstance Spec contains the VirtualMachineInstance specification.
           */
          spec?: {
            /**
             * Specifies a set of public keys to inject into the vm guest
             *
             * @maxItems 256
             */
            accessCredentials?: {
              /**
               * SSHPublicKey represents the source and method of applying a ssh public
               * key into a guest virtual machine.
               */
              sshPublicKey?: {
                /**
                 * PropagationMethod represents how the public key is injected into the vm guest.
                 */
                propagationMethod: {
                  /**
                   * ConfigDrivePropagation means that the ssh public keys are injected
                   * into the VM using metadata using the configDrive cloud-init provider
                   */
                  configDrive?: {
                    [k: string]: unknown;
                  };
                  /**
                   * NoCloudPropagation means that the ssh public keys are injected
                   * into the VM using metadata using the noCloud cloud-init provider
                   */
                  noCloud?: {
                    [k: string]: unknown;
                  };
                  /**
                   * QemuGuestAgentAccessCredentailPropagation means ssh public keys are
                   * dynamically injected into the vm at runtime via the qemu guest agent.
                   * This feature requires the qemu guest agent to be running within the guest.
                   */
                  qemuGuestAgent?: {
                    /**
                     * Users represents a list of guest users that should have the ssh public keys
                     * added to their authorized_keys file.
                     */
                    users: string[];
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                };
                /**
                 * Source represents where the public keys are pulled from
                 */
                source: {
                  /**
                   * Secret means that the access credential is pulled from a kubernetes secret
                   */
                  secret?: {
                    /**
                     * SecretName represents the name of the secret in the VMI's namespace
                     */
                    secretName: string;
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              /**
               * UserPassword represents the source and method for applying a guest user's
               * password
               */
              userPassword?: {
                /**
                 * propagationMethod represents how the user passwords are injected into the vm guest.
                 */
                propagationMethod: {
                  /**
                   * QemuGuestAgentAccessCredentailPropagation means passwords are
                   * dynamically injected into the vm at runtime via the qemu guest agent.
                   * This feature requires the qemu guest agent to be running within the guest.
                   */
                  qemuGuestAgent?: {
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                };
                /**
                 * Source represents where the user passwords are pulled from
                 */
                source: {
                  /**
                   * Secret means that the access credential is pulled from a kubernetes secret
                   */
                  secret?: {
                    /**
                     * SecretName represents the name of the secret in the VMI's namespace
                     */
                    secretName: string;
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            /**
             * If affinity is specifies, obey all the affinity rules
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
                     * incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)'
                     * to select the group of existing pods which pods will be taken into consideration
                     * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     * pod labels will be ignored. The default value is empty.
                     * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                     * Also, matchLabelKeys cannot be set when labelSelector isn't set.
                     */
                    matchLabelKeys?: string[];
                    /**
                     * MismatchLabelKeys is a set of pod label keys to select which pods will
                     * be taken into consideration. The keys are used to lookup values from the
                     * incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)'
                     * to select the group of existing pods which pods will be taken into consideration
                     * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     * pod labels will be ignored. The default value is empty.
                     * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                     * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
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
                   * incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)'
                   * to select the group of existing pods which pods will be taken into consideration
                   * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                   * pod labels will be ignored. The default value is empty.
                   * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                   * Also, matchLabelKeys cannot be set when labelSelector isn't set.
                   */
                  matchLabelKeys?: string[];
                  /**
                   * MismatchLabelKeys is a set of pod label keys to select which pods will
                   * be taken into consideration. The keys are used to lookup values from the
                   * incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)'
                   * to select the group of existing pods which pods will be taken into consideration
                   * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                   * pod labels will be ignored. The default value is empty.
                   * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                   * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
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
                 * compute a sum by iterating through the elements of this field and subtracting
                 * "weight" from the sum if the node has pods which matches the corresponding podAffinityTerm; the
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
                     * incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)'
                     * to select the group of existing pods which pods will be taken into consideration
                     * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     * pod labels will be ignored. The default value is empty.
                     * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                     * Also, matchLabelKeys cannot be set when labelSelector isn't set.
                     */
                    matchLabelKeys?: string[];
                    /**
                     * MismatchLabelKeys is a set of pod label keys to select which pods will
                     * be taken into consideration. The keys are used to lookup values from the
                     * incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)'
                     * to select the group of existing pods which pods will be taken into consideration
                     * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     * pod labels will be ignored. The default value is empty.
                     * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                     * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
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
                   * incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)'
                   * to select the group of existing pods which pods will be taken into consideration
                   * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                   * pod labels will be ignored. The default value is empty.
                   * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                   * Also, matchLabelKeys cannot be set when labelSelector isn't set.
                   */
                  matchLabelKeys?: string[];
                  /**
                   * MismatchLabelKeys is a set of pod label keys to select which pods will
                   * be taken into consideration. The keys are used to lookup values from the
                   * incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)'
                   * to select the group of existing pods which pods will be taken into consideration
                   * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                   * pod labels will be ignored. The default value is empty.
                   * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                   * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
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
             * Specifies the architecture of the vm guest you are attempting to run. Defaults to the compiled architecture of the KubeVirt components
             */
            architecture?: string;
            /**
             * Specifies the DNS parameters of a pod.
             * Parameters specified here will be merged to the generated DNS
             * configuration based on DNSPolicy.
             */
            dnsConfig?: {
              /**
               * A list of DNS name server IP addresses.
               * This will be appended to the base nameservers generated from DNSPolicy.
               * Duplicated nameservers will be removed.
               */
              nameservers?: string[];
              /**
               * A list of DNS resolver options.
               * This will be merged with the base options generated from DNSPolicy.
               * Duplicated entries will be removed. Resolution options given in Options
               * will override those that appear in the base DNSPolicy.
               */
              options?: {
                /**
                 * Name is this DNS resolver option's name.
                 * Required.
                 */
                name?: string;
                /**
                 * Value is this DNS resolver option's value.
                 */
                value?: string;
                [k: string]: unknown;
              }[];
              /**
               * A list of DNS search domains for host-name lookup.
               * This will be appended to the base search paths generated from DNSPolicy.
               * Duplicated search paths will be removed.
               */
              searches?: string[];
              [k: string]: unknown;
            };
            /**
             * Set DNS policy for the pod.
             * Defaults to "ClusterFirst".
             * Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'.
             * DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy.
             * To have DNS options set along with hostNetwork, you have to specify DNS policy
             * explicitly to 'ClusterFirstWithHostNet'.
             */
            dnsPolicy?: string;
            /**
             * Specification of the desired behavior of the VirtualMachineInstance on the host.
             */
            domain: {
              /**
               * Chassis specifies the chassis info passed to the domain.
               */
              chassis?: {
                asset?: string;
                manufacturer?: string;
                serial?: string;
                sku?: string;
                version?: string;
                [k: string]: unknown;
              };
              /**
               * Clock sets the clock and timers of the vmi.
               */
              clock?: {
                /**
                 * Timer specifies whih timers are attached to the vmi.
                 */
                timer?: {
                  /**
                   * HPET (High Precision Event Timer) - multiple timers with periodic interrupts.
                   */
                  hpet?: {
                    /**
                     * Enabled set to false makes sure that the machine type or a preset can't add the timer.
                     * Defaults to true.
                     */
                    present?: boolean;
                    /**
                     * TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest.
                     * One of "delay", "catchup", "merge", "discard".
                     */
                    tickPolicy?: string;
                    [k: string]: unknown;
                  };
                  /**
                   * Hyperv (Hypervclock) - lets guests read the host’s wall clock time (paravirtualized). For windows guests.
                   */
                  hyperv?: {
                    /**
                     * Enabled set to false makes sure that the machine type or a preset can't add the timer.
                     * Defaults to true.
                     */
                    present?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * KVM 	(KVM clock) - lets guests read the host’s wall clock time (paravirtualized). For linux guests.
                   */
                  kvm?: {
                    /**
                     * Enabled set to false makes sure that the machine type or a preset can't add the timer.
                     * Defaults to true.
                     */
                    present?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * PIT (Programmable Interval Timer) - a timer with periodic interrupts.
                   */
                  pit?: {
                    /**
                     * Enabled set to false makes sure that the machine type or a preset can't add the timer.
                     * Defaults to true.
                     */
                    present?: boolean;
                    /**
                     * TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest.
                     * One of "delay", "catchup", "discard".
                     */
                    tickPolicy?: string;
                    [k: string]: unknown;
                  };
                  /**
                   * RTC (Real Time Clock) - a continuously running timer with periodic interrupts.
                   */
                  rtc?: {
                    /**
                     * Enabled set to false makes sure that the machine type or a preset can't add the timer.
                     * Defaults to true.
                     */
                    present?: boolean;
                    /**
                     * TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest.
                     * One of "delay", "catchup".
                     */
                    tickPolicy?: string;
                    /**
                     * Track the guest or the wall clock.
                     */
                    track?: string;
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                };
                /**
                 * Timezone sets the guest clock to the specified timezone.
                 * Zone name follows the TZ environment variable format (e.g. 'America/New_York').
                 */
                timezone?: string;
                /**
                 * UTC sets the guest clock to UTC on each boot. If an offset is specified,
                 * guest changes to the clock will be kept during reboots and are not reset.
                 */
                utc?: {
                  /**
                   * OffsetSeconds specifies an offset in seconds, relative to UTC. If set,
                   * guest changes to the clock will be kept during reboots and not reset.
                   */
                  offsetSeconds?: number;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              /**
               * CPU allow specified the detailed CPU topology inside the vmi.
               */
              cpu?: {
                /**
                 * Cores specifies the number of cores inside the vmi.
                 * Must be a value greater or equal 1.
                 */
                cores?: number;
                /**
                 * DedicatedCPUPlacement requests the scheduler to place the VirtualMachineInstance on a node
                 * with enough dedicated pCPUs and pin the vCPUs to it.
                 */
                dedicatedCpuPlacement?: boolean;
                /**
                 * Features specifies the CPU features list inside the VMI.
                 */
                features?: {
                  /**
                   * Name of the CPU feature
                   */
                  name: string;
                  /**
                   * Policy is the CPU feature attribute which can have the following attributes:
                   * force    - The virtual CPU will claim the feature is supported regardless of it being supported by host CPU.
                   * require  - Guest creation will fail unless the feature is supported by the host CPU or the hypervisor is able to emulate it.
                   * optional - The feature will be supported by virtual CPU if and only if it is supported by host CPU.
                   * disable  - The feature will not be supported by virtual CPU.
                   * forbid   - Guest creation will fail if the feature is supported by host CPU.
                   * Defaults to require
                   */
                  policy?: string;
                  [k: string]: unknown;
                }[];
                /**
                 * IsolateEmulatorThread requests one more dedicated pCPU to be allocated for the VMI to place
                 * the emulator thread on it.
                 */
                isolateEmulatorThread?: boolean;
                /**
                 * MaxSockets specifies the maximum amount of sockets that can
                 * be hotplugged
                 */
                maxSockets?: number;
                /**
                 * Model specifies the CPU model inside the VMI.
                 * List of available models https://github.com/libvirt/libvirt/tree/master/src/cpu_map.
                 * It is possible to specify special cases like "host-passthrough" to get the same CPU as the node
                 * and "host-model" to get CPU closest to the node one.
                 * Defaults to host-model.
                 */
                model?: string;
                /**
                 * NUMA allows specifying settings for the guest NUMA topology
                 */
                numa?: {
                  /**
                   * GuestMappingPassthrough will create an efficient guest topology based on host CPUs exclusively assigned to a pod.
                   * The created topology ensures that memory and CPUs on the virtual numa nodes never cross boundaries of host numa nodes.
                   */
                  guestMappingPassthrough?: {
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                };
                /**
                 * Realtime instructs the virt-launcher to tune the VMI for lower latency, optional for real time workloads
                 */
                realtime?: {
                  /**
                   * Mask defines the vcpu mask expression that defines which vcpus are used for realtime. Format matches libvirt's expressions.
                   * Example: "0-3,^1","0,2,3","2-3"
                   */
                  mask?: string;
                  [k: string]: unknown;
                };
                /**
                 * Sockets specifies the number of sockets inside the vmi.
                 * Must be a value greater or equal 1.
                 */
                sockets?: number;
                /**
                 * Threads specifies the number of threads inside the vmi.
                 * Must be a value greater or equal 1.
                 */
                threads?: number;
                [k: string]: unknown;
              };
              /**
               * Devices allows adding disks, network interfaces, and others
               */
              devices: {
                /**
                 * Whether to attach the default graphics device or not.
                 * VNC will not be available if set to false. Defaults to true.
                 */
                autoattachGraphicsDevice?: boolean;
                /**
                 * Whether to attach an Input Device.
                 * Defaults to false.
                 */
                autoattachInputDevice?: boolean;
                /**
                 * Whether to attach the Memory balloon device with default period.
                 * Period can be adjusted in virt-config.
                 * Defaults to true.
                 */
                autoattachMemBalloon?: boolean;
                /**
                 * Whether to attach a pod network interface. Defaults to true.
                 */
                autoattachPodInterface?: boolean;
                /**
                 * Whether to attach the default virtio-serial console or not.
                 * Serial console access will not be available if set to false. Defaults to true.
                 */
                autoattachSerialConsole?: boolean;
                /**
                 * Whether to attach the VSOCK CID to the VM or not.
                 * VSOCK access will be available if set to true. Defaults to false.
                 */
                autoattachVSOCK?: boolean;
                /**
                 * Whether or not to enable virtio multi-queue for block devices.
                 * Defaults to false.
                 */
                blockMultiQueue?: boolean;
                /**
                 * To configure and access client devices such as redirecting USB
                 */
                clientPassthrough?: {
                  [k: string]: unknown;
                };
                /**
                 * DisableHotplug disabled the ability to hotplug disks.
                 */
                disableHotplug?: boolean;
                /**
                 * Disks describes disks, cdroms and luns which are connected to the vmi.
                 *
                 * @maxItems 256
                 */
                disks?: {
                  /**
                   * If specified, the virtual disk will be presented with the given block sizes.
                   */
                  blockSize?: {
                    /**
                     * CustomBlockSize represents the desired logical and physical block size for a VM disk.
                     */
                    custom?: {
                      discardGranularity?: number;
                      logical?: number;
                      physical?: number;
                      [k: string]: unknown;
                    };
                    /**
                     * Represents if a feature is enabled or disabled.
                     */
                    matchVolume?: {
                      /**
                       * Enabled determines if the feature should be enabled or disabled on the guest.
                       * Defaults to true.
                       */
                      enabled?: boolean;
                      [k: string]: unknown;
                    };
                    [k: string]: unknown;
                  };
                  /**
                   * BootOrder is an integer value > 0, used to determine ordering of boot devices.
                   * Lower values take precedence.
                   * Each disk or interface that has a boot order must have a unique value.
                   * Disks without a boot order are not tried if a disk with a boot order exists.
                   */
                  bootOrder?: number;
                  /**
                   * Cache specifies which kvm disk cache mode should be used.
                   * Supported values are:
                   * none: Guest I/O not cached on the host, but may be kept in a disk cache.
                   * writethrough: Guest I/O cached on the host but written through to the physical medium. Slowest but with most guarantees.
                   * writeback: Guest I/O cached on the host.
                   * Defaults to none if the storage supports O_DIRECT, otherwise writethrough.
                   */
                  cache?: string;
                  /**
                   * Attach a volume as a cdrom to the vmi.
                   */
                  cdrom?: {
                    /**
                     * Bus indicates the type of disk device to emulate.
                     * supported values: virtio, sata, scsi.
                     */
                    bus?: string;
                    /**
                     * ReadOnly.
                     * Defaults to true.
                     */
                    readonly?: boolean;
                    /**
                     * Tray indicates if the tray of the device is open or closed.
                     * Allowed values are "open" and "closed".
                     * Defaults to closed.
                     */
                    tray?: string;
                    [k: string]: unknown;
                  };
                  /**
                   * ChangedBlockTracking indicates this disk should have CBT option
                   * Defaults to false.
                   */
                  changedBlockTracking?: boolean;
                  /**
                   * dedicatedIOThread indicates this disk should have an exclusive IO Thread.
                   * Enabling this implies useIOThreads = true.
                   * Defaults to false.
                   */
                  dedicatedIOThread?: boolean;
                  /**
                   * Attach a volume as a disk to the vmi.
                   */
                  disk?: {
                    /**
                     * Bus indicates the type of disk device to emulate.
                     * supported values: virtio, sata, scsi, usb.
                     */
                    bus?: string;
                    /**
                     * If specified, the virtual disk will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10
                     */
                    pciAddress?: string;
                    /**
                     * ReadOnly.
                     * Defaults to false.
                     */
                    readonly?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * If specified, it can change the default error policy (stop) for the disk
                   */
                  errorPolicy?: string;
                  /**
                   * IO specifies which QEMU disk IO mode should be used.
                   * Supported values are: native, default, threads.
                   */
                  io?: string;
                  /**
                   * Attach a volume as a LUN to the vmi.
                   */
                  lun?: {
                    /**
                     * Bus indicates the type of disk device to emulate.
                     * supported values: virtio, sata, scsi.
                     */
                    bus?: string;
                    /**
                     * ReadOnly.
                     * Defaults to false.
                     */
                    readonly?: boolean;
                    /**
                     * Reservation indicates if the disk needs to support the persistent reservation for the SCSI disk
                     */
                    reservation?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * Name is the device name
                   */
                  name: string;
                  /**
                   * Serial provides the ability to specify a serial number for the disk device.
                   */
                  serial?: string;
                  /**
                   * If specified the disk is made sharable and multiple write from different VMs are permitted
                   */
                  shareable?: boolean;
                  /**
                   * If specified, disk address and its tag will be provided to the guest via config drive metadata
                   */
                  tag?: string;
                  [k: string]: unknown;
                }[];
                /**
                 * DownwardMetrics creates a virtio serials for exposing the downward metrics to the vmi.
                 */
                downwardMetrics?: {
                  [k: string]: unknown;
                };
                /**
                 * Filesystems describes filesystem which is connected to the vmi.
                 */
                filesystems?: {
                  /**
                   * Name is the device name
                   */
                  name: string;
                  /**
                   * Virtiofs is supported
                   */
                  virtiofs: {
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                }[];
                /**
                 * Whether to attach a GPU device to the vmi.
                 */
                gpus?: {
                  /**
                   * ClaimName needs to be provided from the list vmi.spec.resourceClaims[].name where this
                   * device is allocated
                   */
                  claimName?: string;
                  /**
                   * DeviceName is the name of the device provisioned by device-plugins
                   */
                  deviceName?: string;
                  /**
                   * Name of the GPU device as exposed by a device plugin
                   */
                  name: string;
                  /**
                   * RequestName needs to be provided from resourceClaim.spec.devices.requests[].name where this
                   * device is requested
                   */
                  requestName?: string;
                  /**
                   * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
                   */
                  tag?: string;
                  virtualGPUOptions?: {
                    display?: {
                      /**
                       * Enabled determines if a display addapter backed by a vGPU should be enabled or disabled on the guest.
                       * Defaults to true.
                       */
                      enabled?: boolean;
                      /**
                       * Enables a boot framebuffer, until the guest OS loads a real GPU driver
                       * Defaults to true.
                       */
                      ramFB?: {
                        /**
                         * Enabled determines if the feature should be enabled or disabled on the guest.
                         * Defaults to true.
                         */
                        enabled?: boolean;
                        [k: string]: unknown;
                      };
                      [k: string]: unknown;
                    };
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                }[];
                /**
                 * Whether to attach a host device to the vmi.
                 */
                hostDevices?: {
                  /**
                   * ClaimName needs to be provided from the list vmi.spec.resourceClaims[].name where this
                   * device is allocated
                   */
                  claimName?: string;
                  /**
                   * DeviceName is the name of the device provisioned by device-plugins
                   */
                  deviceName?: string;
                  name: string;
                  /**
                   * RequestName needs to be provided from resourceClaim.spec.devices.requests[].name where this
                   * device is requested
                   */
                  requestName?: string;
                  /**
                   * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
                   */
                  tag?: string;
                  [k: string]: unknown;
                }[];
                /**
                 * Inputs describe input devices
                 */
                inputs?: {
                  /**
                   * Bus indicates the bus of input device to emulate.
                   * Supported values: virtio, usb.
                   */
                  bus?: string;
                  /**
                   * Name is the device name
                   */
                  name: string;
                  /**
                   * Type indicated the type of input device.
                   * Supported values: tablet.
                   */
                  type: string;
                  [k: string]: unknown;
                }[];
                /**
                 * Interfaces describe network interfaces which are added to the vmi.
                 *
                 * @maxItems 256
                 */
                interfaces?: {
                  /**
                   * If specified, the ACPI index is used to provide network interface device naming, that is stable across changes
                   * in PCI addresses assigned to the device.
                   * This value is required to be unique across all devices and be between 1 and (16*1024-1).
                   */
                  acpiIndex?: number;
                  /**
                   * Binding specifies the binding plugin that will be used to connect the interface to the guest.
                   * It provides an alternative to InterfaceBindingMethod.
                   * version: 1alphav1
                   */
                  binding?: {
                    /**
                     * Name references to the binding name as denined in the kubevirt CR.
                     * version: 1alphav1
                     */
                    name: string;
                    [k: string]: unknown;
                  };
                  /**
                   * BootOrder is an integer value > 0, used to determine ordering of boot devices.
                   * Lower values take precedence.
                   * Each interface or disk that has a boot order must have a unique value.
                   * Interfaces without a boot order are not tried.
                   */
                  bootOrder?: number;
                  /**
                   * InterfaceBridge connects to a given network via a linux bridge.
                   */
                  bridge?: {
                    [k: string]: unknown;
                  };
                  /**
                   * If specified the network interface will pass additional DHCP options to the VMI
                   */
                  dhcpOptions?: {
                    /**
                     * If specified will pass option 67 to interface's DHCP server
                     */
                    bootFileName?: string;
                    /**
                     * If specified will pass the configured NTP server to the VM via DHCP option 042.
                     */
                    ntpServers?: string[];
                    /**
                     * If specified will pass extra DHCP options for private use, range: 224-254
                     */
                    privateOptions?: {
                      /**
                       * Option is an Integer value from 224-254
                       * Required.
                       */
                      option: number;
                      /**
                       * Value is a String value for the Option provided
                       * Required.
                       */
                      value: string;
                      [k: string]: unknown;
                    }[];
                    /**
                     * If specified will pass option 66 to interface's DHCP server
                     */
                    tftpServerName?: string;
                    [k: string]: unknown;
                  };
                  /**
                   * Interface MAC address. For example: de:ad:00:00:be:af or DE-AD-00-00-BE-AF.
                   */
                  macAddress?: string;
                  /**
                   * DeprecatedMacvtap is an alias to the deprecated Macvtap interface,
                   * please refer to Kubevirt user guide for alternatives.
                   * Deprecated: Removed in v1.3
                   */
                  macvtap?: {
                    [k: string]: unknown;
                  };
                  /**
                   * InterfaceMasquerade connects to a given network using netfilter rules to nat the traffic.
                   */
                  masquerade?: {
                    [k: string]: unknown;
                  };
                  /**
                   * Interface model.
                   * One of: e1000, e1000e, igb, ne2k_pci, pcnet, rtl8139, virtio.
                   * Defaults to virtio.
                   */
                  model?: string;
                  /**
                   * Logical name of the interface as well as a reference to the associated networks.
                   * Must match the Name of a Network.
                   */
                  name: string;
                  /**
                   * DeprecatedPasst is an alias to the deprecated Passt interface,
                   * please refer to Kubevirt user guide for alternatives.
                   * Deprecated: Removed in v1.3
                   */
                  passt?: {
                    [k: string]: unknown;
                  };
                  /**
                   * InterfacePasstBinding connects to a given network using passt usermode networking.
                   */
                  passtBinding?: {
                    [k: string]: unknown;
                  };
                  /**
                   * If specified, the virtual network interface will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10
                   */
                  pciAddress?: string;
                  /**
                   * List of ports to be forwarded to the virtual machine.
                   */
                  ports?: {
                    /**
                     * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each
                     * named port in a pod must have a unique name. Name for the port that can be
                     * referred to by services.
                     */
                    name?: string;
                    /**
                     * Number of port to expose for the virtual machine.
                     * This must be a valid port number, 0 < x < 65536.
                     */
                    port: number;
                    /**
                     * Protocol for port. Must be UDP or TCP.
                     * Defaults to "TCP".
                     */
                    protocol?: string;
                    [k: string]: unknown;
                  }[];
                  /**
                   * DeprecatedSlirp is an alias to the deprecated Slirp interface
                   * Deprecated: Removed in v1.3
                   */
                  slirp?: {
                    [k: string]: unknown;
                  };
                  /**
                   * InterfaceSRIOV connects to a given network by passing-through an SR-IOV PCI device via vfio.
                   */
                  sriov?: {
                    [k: string]: unknown;
                  };
                  /**
                   * State represents the requested operational state of the interface.
                   * The supported values are:
                   * 'absent', expressing a request to remove the interface.
                   * 'down', expressing a request to set the link down.
                   * 'up', expressing a request to set the link up.
                   * Empty value functions as 'up'.
                   */
                  state?: string;
                  /**
                   * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
                   */
                  tag?: string;
                  [k: string]: unknown;
                }[];
                /**
                 * Whether to log the auto-attached default serial console or not.
                 * Serial console logs will be collect to a file and then streamed from a named 'guest-console-log'.
                 * Not relevant if autoattachSerialConsole is disabled.
                 * Defaults to cluster wide setting on VirtualMachineOptions.
                 */
                logSerialConsole?: boolean;
                /**
                 * If specified, virtual network interfaces configured with a virtio bus will also enable the vhost multiqueue feature for network devices. The number of queues created depends on additional factors of the VirtualMachineInstance, like the number of guest CPUs.
                 */
                networkInterfaceMultiqueue?: boolean;
                /**
                 * PanicDevices provides additional crash information when a guest crashes.
                 */
                panicDevices?: {
                  /**
                   * Model specifies what type of panic device is provided.
                   * The panic model used when this attribute is missing depends on the hypervisor and guest arch.
                   * One of: isa, hyperv, pvpanic.
                   */
                  model?: string;
                  [k: string]: unknown;
                }[];
                /**
                 * Whether to have random number generator from host
                 */
                rng?: {
                  [k: string]: unknown;
                };
                /**
                 * Whether to emulate a sound device.
                 */
                sound?: {
                  /**
                   * We only support ich9 or ac97.
                   * If SoundDevice is not set: No sound card is emulated.
                   * If SoundDevice is set but Model is not: ich9
                   */
                  model?: string;
                  /**
                   * User's defined name for this sound device
                   */
                  name: string;
                  [k: string]: unknown;
                };
                /**
                 * Whether to emulate a TPM device.
                 */
                tpm?: {
                  /**
                   * Enabled allows a user to explicitly disable the vTPM even when one is enabled by a preference referenced by the VirtualMachine
                   * Defaults to True
                   */
                  enabled?: boolean;
                  /**
                   * Persistent indicates the state of the TPM device should be kept accross reboots
                   * Defaults to false
                   */
                  persistent?: boolean;
                  [k: string]: unknown;
                };
                /**
                 * Fall back to legacy virtio 0.9 support if virtio bus is selected on devices.
                 * This is helpful for old machines like CentOS6 or RHEL6 which
                 * do not understand virtio_non_transitional (virtio 1.0).
                 */
                useVirtioTransitional?: boolean;
                /**
                 * Video describes the video device configuration for the vmi.
                 */
                video?: {
                  /**
                   * Type specifies the video device type (e.g., virtio, vga, bochs, ramfb).
                   * If not specified, the default is architecture-dependent (VGA for BIOS-based VMs, Bochs for EFI-based VMs on AMD64; virtio for Arm and s390x).
                   */
                  type?: string;
                  [k: string]: unknown;
                };
                /**
                 * Watchdog describes a watchdog device which can be added to the vmi.
                 */
                watchdog?: {
                  /**
                   * diag288 watchdog device (specific to s390x architecture).
                   */
                  diag288?: {
                    /**
                     * The action to take. Valid values are poweroff, reset, shutdown.
                     * Defaults to reset.
                     */
                    action?: string;
                    [k: string]: unknown;
                  };
                  /**
                   * i6300esb watchdog device.
                   */
                  i6300esb?: {
                    /**
                     * The action to take. Valid values are poweroff, reset, shutdown.
                     * Defaults to reset.
                     */
                    action?: string;
                    [k: string]: unknown;
                  };
                  /**
                   * Name of the watchdog.
                   */
                  name: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              /**
               * Features like acpi, apic, hyperv, smm.
               */
              features?: {
                /**
                 * ACPI enables/disables ACPI inside the guest.
                 * Defaults to enabled.
                 */
                acpi?: {
                  /**
                   * Enabled determines if the feature should be enabled or disabled on the guest.
                   * Defaults to true.
                   */
                  enabled?: boolean;
                  [k: string]: unknown;
                };
                /**
                 * Defaults to the machine type setting.
                 */
                apic?: {
                  /**
                   * Enabled determines if the feature should be enabled or disabled on the guest.
                   * Defaults to true.
                   */
                  enabled?: boolean;
                  /**
                   * EndOfInterrupt enables the end of interrupt notification in the guest.
                   * Defaults to false.
                   */
                  endOfInterrupt?: boolean;
                  [k: string]: unknown;
                };
                /**
                 * Defaults to the machine type setting.
                 */
                hyperv?: {
                  /**
                   * EVMCS Speeds up L2 vmexits, but disables other virtualization features. Requires vapic.
                   * Defaults to the machine type setting.
                   */
                  evmcs?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * Frequencies improves the TSC clock source handling for Hyper-V on KVM.
                   * Defaults to the machine type setting.
                   */
                  frequencies?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * IPI improves performances in overcommited environments. Requires vpindex.
                   * Defaults to the machine type setting.
                   */
                  ipi?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * Reenlightenment enables the notifications on TSC frequency changes.
                   * Defaults to the machine type setting.
                   */
                  reenlightenment?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * Relaxed instructs the guest OS to disable watchdog timeouts.
                   * Defaults to the machine type setting.
                   */
                  relaxed?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * Reset enables Hyperv reboot/reset for the vmi. Requires synic.
                   * Defaults to the machine type setting.
                   */
                  reset?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * Runtime improves the time accounting to improve scheduling in the guest.
                   * Defaults to the machine type setting.
                   */
                  runtime?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * Spinlocks allows to configure the spinlock retry attempts.
                   */
                  spinlocks?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    /**
                     * Retries indicates the number of retries.
                     * Must be a value greater or equal 4096.
                     * Defaults to 4096.
                     */
                    spinlocks?: number;
                    [k: string]: unknown;
                  };
                  /**
                   * SyNIC enables the Synthetic Interrupt Controller.
                   * Defaults to the machine type setting.
                   */
                  synic?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * SyNICTimer enables Synthetic Interrupt Controller Timers, reducing CPU load.
                   * Defaults to the machine type setting.
                   */
                  synictimer?: {
                    /**
                     * Represents if a feature is enabled or disabled.
                     */
                    direct?: {
                      /**
                       * Enabled determines if the feature should be enabled or disabled on the guest.
                       * Defaults to true.
                       */
                      enabled?: boolean;
                      [k: string]: unknown;
                    };
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * TLBFlush improves performances in overcommited environments. Requires vpindex.
                   * Defaults to the machine type setting.
                   */
                  tlbflush?: {
                    /**
                     * Direct allows sending the TLB flush command directly to the hypervisor.
                     * It can be useful to optimize performance in nested virtualization cases, such as Windows VBS.
                     */
                    direct?: {
                      /**
                       * Enabled determines if the feature should be enabled or disabled on the guest.
                       * Defaults to true.
                       */
                      enabled?: boolean;
                      [k: string]: unknown;
                    };
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    /**
                     * Extended allows the guest to execute partial TLB flushes. It can be helpful for general purpose workloads.
                     */
                    extended?: {
                      /**
                       * Enabled determines if the feature should be enabled or disabled on the guest.
                       * Defaults to true.
                       */
                      enabled?: boolean;
                      [k: string]: unknown;
                    };
                    [k: string]: unknown;
                  };
                  /**
                   * VAPIC improves the paravirtualized handling of interrupts.
                   * Defaults to the machine type setting.
                   */
                  vapic?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * VendorID allows setting the hypervisor vendor id.
                   * Defaults to the machine type setting.
                   */
                  vendorid?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    /**
                     * VendorID sets the hypervisor vendor id, visible to the vmi.
                     * String up to twelve characters.
                     */
                    vendorid?: string;
                    [k: string]: unknown;
                  };
                  /**
                   * VPIndex enables the Virtual Processor Index to help windows identifying virtual processors.
                   * Defaults to the machine type setting.
                   */
                  vpindex?: {
                    /**
                     * Enabled determines if the feature should be enabled or disabled on the guest.
                     * Defaults to true.
                     */
                    enabled?: boolean;
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                };
                /**
                 * This enables all supported hyperv flags automatically.
                 * Bear in mind that if this enabled hyperV features cannot
                 * be enabled explicitly. In addition, a Virtual Machine
                 * using it will be non-migratable.
                 */
                hypervPassthrough?: {
                  enabled?: boolean;
                  [k: string]: unknown;
                };
                /**
                 * Configure how KVM presence is exposed to the guest.
                 */
                kvm?: {
                  /**
                   * Hide the KVM hypervisor from standard MSR based discovery.
                   * Defaults to false
                   */
                  hidden?: boolean;
                  [k: string]: unknown;
                };
                /**
                 * Notify the guest that the host supports paravirtual spinlocks.
                 * For older kernels this feature should be explicitly disabled.
                 */
                pvspinlock?: {
                  /**
                   * Enabled determines if the feature should be enabled or disabled on the guest.
                   * Defaults to true.
                   */
                  enabled?: boolean;
                  [k: string]: unknown;
                };
                /**
                 * SMM enables/disables System Management Mode.
                 * TSEG not yet implemented.
                 */
                smm?: {
                  /**
                   * Enabled determines if the feature should be enabled or disabled on the guest.
                   * Defaults to true.
                   */
                  enabled?: boolean;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              /**
               * Firmware.
               */
              firmware?: {
                /**
                 * Information that can be set in the ACPI table
                 */
                acpi?: {
                  /**
                   * Similar to SlicNameRef, another ACPI entry that is used in more recent Windows versions.
                   * The above points to the spec of MSDM too.
                   */
                  msdmNameRef?: string;
                  /**
                   * SlicNameRef should match the volume name of a secret object. The data in the secret should
                   * be a binary blob that follows the ACPI SLIC standard, see:
                   * https://learn.microsoft.com/en-us/previous-versions/windows/hardware/design/dn653305(v=vs.85)
                   */
                  slicNameRef?: string;
                  [k: string]: unknown;
                };
                /**
                 * Settings to control the bootloader that is used.
                 */
                bootloader?: {
                  /**
                   * If set (default), BIOS will be used.
                   */
                  bios?: {
                    /**
                     * If set, the BIOS output will be transmitted over serial
                     */
                    useSerial?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * If set, EFI will be used instead of BIOS.
                   */
                  efi?: {
                    /**
                     * If set to true, Persistent will persist the EFI NVRAM across reboots.
                     * Defaults to false
                     */
                    persistent?: boolean;
                    /**
                     * If set, SecureBoot will be enabled and the OVMF roms will be swapped for
                     * SecureBoot-enabled ones.
                     * Requires SMM to be enabled.
                     * Defaults to true
                     */
                    secureBoot?: boolean;
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                };
                /**
                 * Settings to set the kernel for booting.
                 */
                kernelBoot?: {
                  /**
                   * Container defines the container that containes kernel artifacts
                   */
                  container?: {
                    /**
                     * Image that contains initrd / kernel files.
                     */
                    image: string;
                    /**
                     * Image pull policy.
                     * One of Always, Never, IfNotPresent.
                     * Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
                     * Cannot be updated.
                     * More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
                     */
                    imagePullPolicy?: string;
                    /**
                     * ImagePullSecret is the name of the Docker registry secret required to pull the image. The secret must already exist.
                     */
                    imagePullSecret?: string;
                    /**
                     * the fully-qualified path to the ramdisk image in the host OS
                     */
                    initrdPath?: string;
                    /**
                     * The fully-qualified path to the kernel image in the host OS
                     */
                    kernelPath?: string;
                    [k: string]: unknown;
                  };
                  /**
                   * Arguments to be passed to the kernel at boot time
                   */
                  kernelArgs?: string;
                  [k: string]: unknown;
                };
                /**
                 * The system-serial-number in SMBIOS
                 */
                serial?: string;
                /**
                 * UUID reported by the vmi bios.
                 * Defaults to a random generated uid.
                 */
                uuid?: string;
                [k: string]: unknown;
              };
              /**
               * IOThreads specifies the IOThreads options.
               */
              ioThreads?: {
                /**
                 * SupplementalPoolThreadCount specifies how many iothreads are allocated for the supplementalPool policy.
                 */
                supplementalPoolThreadCount?: number;
                [k: string]: unknown;
              };
              /**
               * Controls whether or not disks will share IOThreads.
               * Omitting IOThreadsPolicy disables use of IOThreads.
               * One of: shared, auto, supplementalPool
               */
              ioThreadsPolicy?: string;
              /**
               * Launch Security setting of the vmi.
               */
              launchSecurity?: {
                /**
                 * AMD Secure Encrypted Virtualization (SEV).
                 */
                sev?: {
                  /**
                   * If specified, run the attestation process for a vmi.
                   */
                  attestation?: {
                    [k: string]: unknown;
                  };
                  /**
                   * Base64 encoded guest owner's Diffie-Hellman key.
                   */
                  dhCert?: string;
                  /**
                   * Guest policy flags as defined in AMD SEV API specification.
                   * Note: due to security reasons it is not allowed to enable guest debugging. Therefore NoDebug flag is not exposed to users and is always true.
                   */
                  policy?: {
                    /**
                     * SEV-ES is required.
                     * Defaults to false.
                     */
                    encryptedState?: boolean;
                    [k: string]: unknown;
                  };
                  /**
                   * Base64 encoded session blob.
                   */
                  session?: string;
                  [k: string]: unknown;
                };
                /**
                 * AMD SEV-SNP flags defined by the SEV-SNP specifications.
                 */
                snp?: {
                  [k: string]: unknown;
                };
                /**
                 * Intel Trust Domain Extensions (TDX).
                 */
                tdx?: {
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              /**
               * Machine type.
               */
              machine?: {
                /**
                 * QEMU machine type is the actual chipset of the VirtualMachineInstance.
                 */
                type?: string;
                [k: string]: unknown;
              };
              /**
               * Memory allow specifying the VMI memory features.
               */
              memory?: {
                /**
                 * Guest allows to specifying the amount of memory which is visible inside the Guest OS.
                 * The Guest must lie between Requests and Limits from the resources section.
                 * Defaults to the requested memory in the resources section if not specified.
                 */
                guest?: number | string;
                /**
                 * Hugepages allow to use hugepages for the VirtualMachineInstance instead of regular memory.
                 */
                hugepages?: {
                  /**
                   * PageSize specifies the hugepage size, for x86_64 architecture valid values are 1Gi and 2Mi.
                   */
                  pageSize?: string;
                  [k: string]: unknown;
                };
                /**
                 * MaxGuest allows to specify the maximum amount of memory which is visible inside the Guest OS.
                 * The delta between MaxGuest and Guest is the amount of memory that can be hot(un)plugged.
                 */
                maxGuest?: number | string;
                /**
                 * ReservedOverhead configures the memory overhead applied to a VM
                 * and its characteristics.
                 */
                reservedOverhead?: {
                  /**
                   * AddedOverhead determines the memory overhead that will be reserved
                   * for the VM. It increases the virt-launcher pod memory limit.
                   */
                  addedOverhead?: number | string;
                  /**
                   * RequiresLock determines whether the VM's and its overhead memory
                   * need to be locked or not. It is a common practice to enable this
                   * if vDPA, VFIO or any other specialized hardware that depends on
                   * DMA is being used by the VM.
                   * False - (Default) memory lock RLimits are not modified.
                   * True - Memory lock RLimits will be updated to consider VM memory
                   *        size and memory overhead
                   */
                  memLock?: 'NotRequired' | 'Required';
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              /**
               * RebootPolicy specifies how the guest should behave on reboot.
               * Reboot (default): The guest is allowed to reboot silently.
               * Terminate: The VMI will be terminated on guest reboot, allowing
               * higher level controllers (such as the VM controller) to recreate
               * the VMI with any updated configuration such as boot order changes.
               */
              rebootPolicy?: 'Reboot' | 'Terminate';
              /**
               * Resources describes the Compute Resources required by this vmi.
               */
              resources?: {
                /**
                 * Limits describes the maximum amount of compute resources allowed.
                 * Valid resource keys are "memory" and "cpu".
                 */
                limits?: {
                  [k: string]: number | string;
                };
                /**
                 * Don't ask the scheduler to take the guest-management overhead into account. Instead
                 * put the overhead only into the container's memory limit. This can lead to crashes if
                 * all memory is in use on a node. Defaults to false.
                 */
                overcommitGuestOverhead?: boolean;
                /**
                 * Requests is a description of the initial vmi resources.
                 * Valid resource keys are "memory" and "cpu".
                 */
                requests?: {
                  [k: string]: number | string;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            /**
             * EvictionStrategy describes the strategy to follow when a node drain occurs.
             * The possible options are:
             * - "None": No action will be taken, according to the specified 'RunStrategy' the VirtualMachine will be restarted or shutdown.
             * - "LiveMigrate": the VirtualMachineInstance will be migrated instead of being shutdown.
             * - "LiveMigrateIfPossible": the same as "LiveMigrate" but only if the VirtualMachine is Live-Migratable, otherwise it will behave as "None".
             * - "External": the VirtualMachineInstance will be protected and 'vmi.Status.EvacuationNodeName' will be set on eviction. This is mainly useful for cluster-api-provider-kubevirt (capk) which needs a way for VMI's to be blocked from eviction, yet signal capk that eviction has been called on the VMI so the capk controller can handle tearing the VMI down. Details can be found in the commit description https://github.com/kubevirt/kubevirt/commit/c1d77face705c8b126696bac9a3ee3825f27f1fa.
             */
            evictionStrategy?: string;
            /**
             * Specifies the hostname of the vmi
             * If not specified, the hostname will be set to the name of the vmi, if dhcp or cloud-init is configured properly.
             */
            hostname?: string;
            /**
             * Periodic probe of VirtualMachineInstance liveness.
             * VirtualmachineInstances will be stopped if the probe fails.
             * Cannot be updated.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            livenessProbe?: {
              /**
               * One and only one of the following should be specified.
               * Exec specifies the action to take, it will be executed on the guest through the qemu-guest-agent.
               * If the guest agent is not available, this probe will fail.
               */
              exec?: {
                /**
                 * Command is the command line to execute inside the container, the working directory for the
                 * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                 * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                 * a shell, you need to explicitly call out to that shell.
                 * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                 */
                command?: string[];
                [k: string]: unknown;
              };
              /**
               * Minimum consecutive failures for the probe to be considered failed after having succeeded.
               * Defaults to 3. Minimum value is 1.
               */
              failureThreshold?: number;
              /**
               * GuestAgentPing contacts the qemu-guest-agent for availability checks.
               */
              guestAgentPing?: {
                [k: string]: unknown;
              };
              /**
               * HTTPGet specifies the http request to perform.
               */
              httpGet?: {
                /**
                 * Host name to connect to, defaults to the pod IP. You probably want to set
                 * "Host" in httpHeaders instead.
                 */
                host?: string;
                /**
                 * Custom headers to set in the request. HTTP allows repeated headers.
                 */
                httpHeaders?: {
                  /**
                   * The header field name.
                   * This will be canonicalized upon output, so case-variant names will be understood as the same header.
                   */
                  name: string;
                  /**
                   * The header field value
                   */
                  value: string;
                  [k: string]: unknown;
                }[];
                /**
                 * Path to access on the HTTP server.
                 */
                path?: string;
                /**
                 * Name or number of the port to access on the container.
                 * Number must be in the range 1 to 65535.
                 * Name must be an IANA_SVC_NAME.
                 */
                port: number | string;
                /**
                 * Scheme to use for connecting to the host.
                 * Defaults to HTTP.
                 */
                scheme?: string;
                [k: string]: unknown;
              };
              /**
               * Number of seconds after the VirtualMachineInstance has started before liveness probes are initiated.
               * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
               */
              initialDelaySeconds?: number;
              /**
               * How often (in seconds) to perform the probe.
               * Default to 10 seconds. Minimum value is 1.
               */
              periodSeconds?: number;
              /**
               * Minimum consecutive successes for the probe to be considered successful after having failed.
               * Defaults to 1. Must be 1 for liveness. Minimum value is 1.
               */
              successThreshold?: number;
              /**
               * TCPSocket specifies an action involving a TCP port.
               * TCP hooks not yet supported
               */
              tcpSocket?: {
                /**
                 * Optional: Host name to connect to, defaults to the pod IP.
                 */
                host?: string;
                /**
                 * Number or name of the port to access on the container.
                 * Number must be in the range 1 to 65535.
                 * Name must be an IANA_SVC_NAME.
                 */
                port: number | string;
                [k: string]: unknown;
              };
              /**
               * Number of seconds after which the probe times out.
               * For exec probes the timeout fails the probe but does not terminate the command running on the guest.
               * This means a blocking command can result in an increasing load on the guest.
               * A small buffer will be added to the resulting workload exec probe to compensate for delays
               * caused by the qemu guest exec mechanism.
               * Defaults to 1 second. Minimum value is 1.
               * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
               */
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            /**
             * List of networks that can be attached to a vm's virtual interface.
             *
             * @maxItems 256
             */
            networks?: {
              /**
               * Represents the multus cni network.
               */
              multus?: {
                /**
                 * Select the default network and add it to the
                 * multus-cni.io/default-network annotation.
                 */
                default?: boolean;
                /**
                 * References to a NetworkAttachmentDefinition CRD object. Format:
                 * <networkName>, <namespace>/<networkName>. If namespace is not
                 * specified, VMI namespace is assumed.
                 */
                networkName: string;
                [k: string]: unknown;
              };
              /**
               * Network name.
               * Must be a DNS_LABEL and unique within the vm.
               * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              name: string;
              /**
               * Represents the stock pod network interface.
               */
              pod?: {
                /**
                 * IPv6 CIDR for the vm network.
                 * Defaults to fd10:0:2::/120 if not specified.
                 */
                vmIPv6NetworkCIDR?: string;
                /**
                 * CIDR for vm network.
                 * Default 10.0.2.0/24 if not specified.
                 */
                vmNetworkCIDR?: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            /**
             * NodeSelector is a selector which must be true for the vmi to fit on a node.
             * Selector which must match a node's labels for the vmi to be scheduled on that node.
             * More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
             */
            nodeSelector?: {
              [k: string]: string;
            };
            /**
             * If specified, indicates the pod's priority.
             * If not specified, the pod priority will be default or zero if there is no
             * default.
             */
            priorityClassName?: string;
            /**
             * Periodic probe of VirtualMachineInstance service readiness.
             * VirtualmachineInstances will be removed from service endpoints if the probe fails.
             * Cannot be updated.
             * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            readinessProbe?: {
              /**
               * One and only one of the following should be specified.
               * Exec specifies the action to take, it will be executed on the guest through the qemu-guest-agent.
               * If the guest agent is not available, this probe will fail.
               */
              exec?: {
                /**
                 * Command is the command line to execute inside the container, the working directory for the
                 * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                 * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                 * a shell, you need to explicitly call out to that shell.
                 * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                 */
                command?: string[];
                [k: string]: unknown;
              };
              /**
               * Minimum consecutive failures for the probe to be considered failed after having succeeded.
               * Defaults to 3. Minimum value is 1.
               */
              failureThreshold?: number;
              /**
               * GuestAgentPing contacts the qemu-guest-agent for availability checks.
               */
              guestAgentPing?: {
                [k: string]: unknown;
              };
              /**
               * HTTPGet specifies the http request to perform.
               */
              httpGet?: {
                /**
                 * Host name to connect to, defaults to the pod IP. You probably want to set
                 * "Host" in httpHeaders instead.
                 */
                host?: string;
                /**
                 * Custom headers to set in the request. HTTP allows repeated headers.
                 */
                httpHeaders?: {
                  /**
                   * The header field name.
                   * This will be canonicalized upon output, so case-variant names will be understood as the same header.
                   */
                  name: string;
                  /**
                   * The header field value
                   */
                  value: string;
                  [k: string]: unknown;
                }[];
                /**
                 * Path to access on the HTTP server.
                 */
                path?: string;
                /**
                 * Name or number of the port to access on the container.
                 * Number must be in the range 1 to 65535.
                 * Name must be an IANA_SVC_NAME.
                 */
                port: number | string;
                /**
                 * Scheme to use for connecting to the host.
                 * Defaults to HTTP.
                 */
                scheme?: string;
                [k: string]: unknown;
              };
              /**
               * Number of seconds after the VirtualMachineInstance has started before liveness probes are initiated.
               * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
               */
              initialDelaySeconds?: number;
              /**
               * How often (in seconds) to perform the probe.
               * Default to 10 seconds. Minimum value is 1.
               */
              periodSeconds?: number;
              /**
               * Minimum consecutive successes for the probe to be considered successful after having failed.
               * Defaults to 1. Must be 1 for liveness. Minimum value is 1.
               */
              successThreshold?: number;
              /**
               * TCPSocket specifies an action involving a TCP port.
               * TCP hooks not yet supported
               */
              tcpSocket?: {
                /**
                 * Optional: Host name to connect to, defaults to the pod IP.
                 */
                host?: string;
                /**
                 * Number or name of the port to access on the container.
                 * Number must be in the range 1 to 65535.
                 * Name must be an IANA_SVC_NAME.
                 */
                port: number | string;
                [k: string]: unknown;
              };
              /**
               * Number of seconds after which the probe times out.
               * For exec probes the timeout fails the probe but does not terminate the command running on the guest.
               * This means a blocking command can result in an increasing load on the guest.
               * A small buffer will be added to the resulting workload exec probe to compensate for delays
               * caused by the qemu guest exec mechanism.
               * Defaults to 1 second. Minimum value is 1.
               * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
               */
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            /**
             * ResourceClaims define which ResourceClaims must be allocated
             * and reserved before the VMI, hence virt-launcher pod is allowed to start. The resources
             * will be made available to the domain which consumes them
             * by name.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate in kubernetes
             *  https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/
             * This field should only be configured if one of the feature-gates GPUsWithDRA or HostDevicesWithDRA is enabled.
             * This feature is in alpha.
             */
            resourceClaims?: {
              /**
               * Name uniquely identifies this resource claim inside the pod.
               * This must be a DNS_LABEL.
               */
              name: string;
              /**
               * ResourceClaimName is the name of a ResourceClaim object in the same
               * namespace as this pod.
               *
               * Exactly one of ResourceClaimName and ResourceClaimTemplateName must
               * be set.
               */
              resourceClaimName?: string;
              /**
               * ResourceClaimTemplateName is the name of a ResourceClaimTemplate
               * object in the same namespace as this pod.
               *
               * The template will be used to create a new ResourceClaim, which will
               * be bound to this pod. When this pod is deleted, the ResourceClaim
               * will also be deleted. The pod name and resource name, along with a
               * generated component, will be used to form a unique name for the
               * ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.
               *
               * This field is immutable and no changes will be made to the
               * corresponding ResourceClaim by the control plane after creating the
               * ResourceClaim.
               *
               * Exactly one of ResourceClaimName and ResourceClaimTemplateName must
               * be set.
               */
              resourceClaimTemplateName?: string;
              [k: string]: unknown;
            }[];
            /**
             * If specified, the VMI will be dispatched by specified scheduler.
             * If not specified, the VMI will be dispatched by default scheduler.
             */
            schedulerName?: string;
            /**
             * StartStrategy can be set to "Paused" if Virtual Machine should be started in paused state.
             */
            startStrategy?: string;
            /**
             * If specified, the fully qualified vmi hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>".
             * If not specified, the vmi will not have a domainname at all. The DNS entry will resolve to the vmi,
             * no matter if the vmi itself can pick up a hostname.
             */
            subdomain?: string;
            /**
             * Grace period observed after signalling a VirtualMachineInstance to stop after which the VirtualMachineInstance is force terminated.
             */
            terminationGracePeriodSeconds?: number;
            /**
             * If toleration is specified, obey all the toleration rules.
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
             * TopologySpreadConstraints describes how a group of VMIs will be spread across a given topology
             * domains. K8s scheduler will schedule VMI pods in a way which abides by the constraints.
             */
            topologySpreadConstraints?: {
              /**
               * LabelSelector is used to find matching pods.
               * Pods that match this label selector are counted to determine the number of pods
               * in their corresponding topology domain.
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
               * MatchLabelKeys is a set of pod label keys to select the pods over which
               * spreading will be calculated. The keys are used to lookup values from the
               * incoming pod labels, those key-value labels are ANDed with labelSelector
               * to select the group of existing pods over which spreading will be calculated
               * for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector.
               * MatchLabelKeys cannot be set when LabelSelector isn't set.
               * Keys that don't exist in the incoming pod labels will
               * be ignored. A null or empty list means only match against labelSelector.
               *
               * This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
               */
              matchLabelKeys?: string[];
              /**
               * MaxSkew describes the degree to which pods may be unevenly distributed.
               * When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference
               * between the number of matching pods in the target topology and the global minimum.
               * The global minimum is the minimum number of matching pods in an eligible domain
               * or zero if the number of eligible domains is less than MinDomains.
               * For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
               * labelSelector spread as 2/2/1:
               * In this case, the global minimum is 1.
               * | zone1 | zone2 | zone3 |
               * |  P P  |  P P  |   P   |
               * - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2;
               * scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2)
               * violate MaxSkew(1).
               * - if MaxSkew is 2, incoming pod can be scheduled onto any zone.
               * When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence
               * to topologies that satisfy it.
               * It's a required field. Default value is 1 and 0 is not allowed.
               */
              maxSkew: number;
              /**
               * MinDomains indicates a minimum number of eligible domains.
               * When the number of eligible domains with matching topology keys is less than minDomains,
               * Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed.
               * And when the number of eligible domains with matching topology keys equals or greater than minDomains,
               * this value has no effect on scheduling.
               * As a result, when the number of eligible domains is less than minDomains,
               * scheduler won't schedule more than maxSkew Pods to those domains.
               * If value is nil, the constraint behaves as if MinDomains is equal to 1.
               * Valid values are integers greater than 0.
               * When value is not nil, WhenUnsatisfiable must be DoNotSchedule.
               *
               * For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same
               * labelSelector spread as 2/2/2:
               * | zone1 | zone2 | zone3 |
               * |  P P  |  P P  |  P P  |
               * The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0.
               * In this situation, new pod with the same labelSelector cannot be scheduled,
               * because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones,
               * it will violate MaxSkew.
               */
              minDomains?: number;
              /**
               * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector
               * when calculating pod topology spread skew. Options are:
               * - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations.
               * - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations.
               *
               * If this value is nil, the behavior is equivalent to the Honor policy.
               */
              nodeAffinityPolicy?: string;
              /**
               * NodeTaintsPolicy indicates how we will treat node taints when calculating
               * pod topology spread skew. Options are:
               * - Honor: nodes without taints, along with tainted nodes for which the incoming pod
               * has a toleration, are included.
               * - Ignore: node taints are ignored. All nodes are included.
               *
               * If this value is nil, the behavior is equivalent to the Ignore policy.
               */
              nodeTaintsPolicy?: string;
              /**
               * TopologyKey is the key of node labels. Nodes that have a label with this key
               * and identical values are considered to be in the same topology.
               * We consider each <key, value> as a "bucket", and try to put balanced number
               * of pods into each bucket.
               * We define a domain as a particular instance of a topology.
               * Also, we define an eligible domain as a domain whose nodes meet the requirements of
               * nodeAffinityPolicy and nodeTaintsPolicy.
               * e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology.
               * And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology.
               * It's a required field.
               */
              topologyKey: string;
              /**
               * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy
               * the spread constraint.
               * - DoNotSchedule (default) tells the scheduler not to schedule it.
               * - ScheduleAnyway tells the scheduler to schedule the pod in any location,
               *   but giving higher precedence to topologies that would help reduce the
               *   skew.
               * A constraint is considered "Unsatisfiable" for an incoming pod
               * if and only if every possible node assignment for that pod would violate
               * "MaxSkew" on some topology.
               * For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
               * labelSelector spread as 3/1/1:
               * | zone1 | zone2 | zone3 |
               * | P P P |   P   |   P   |
               * If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled
               * to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies
               * MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler
               * won't make it *more* imbalanced.
               * It's a required field.
               */
              whenUnsatisfiable: string;
              [k: string]: unknown;
            }[];
            /**
             * List of utility volumes that can be mounted to the vmi virt-launcher pod
             * without having a matching disk in the domain.
             * Used to collect data for various operational workflows.
             *
             * @maxItems 256
             */
            utilityVolumes?: {
              /**
               * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
               */
              claimName: string;
              /**
               * UtilityVolume's name.
               * Must be unique within the vmi, including regular Volumes.
               */
              name: string;
              /**
               * readOnly Will force the ReadOnly setting in VolumeMounts.
               * Default false.
               */
              readOnly?: boolean;
              /**
               * Type represents the type of the utility volume.
               */
              type?: string;
              [k: string]: unknown;
            }[];
            /**
             * List of volumes that can be mounted by disks belonging to the vmi.
             *
             * @maxItems 256
             */
            volumes?: {
              /**
               * CloudInitConfigDrive represents a cloud-init Config Drive user-data source.
               * The Config Drive data will be added as a disk to the vmi. A proper cloud-init installation is required inside the guest.
               * More info: https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html
               */
              cloudInitConfigDrive?: {
                /**
                 * NetworkData contains config drive inline cloud-init networkdata.
                 */
                networkData?: string;
                /**
                 * NetworkDataBase64 contains config drive cloud-init networkdata as a base64 encoded string.
                 */
                networkDataBase64?: string;
                /**
                 * NetworkDataSecretRef references a k8s secret that contains config drive networkdata.
                 */
                networkDataSecretRef?: {
                  /**
                   * Name of the referent.
                   * This field is effectively required, but due to backwards compatibility is
                   * allowed to be empty. Instances of this type with an empty value here are
                   * almost certainly wrong.
                   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   */
                  name?: string;
                  [k: string]: unknown;
                };
                /**
                 * UserDataSecretRef references a k8s secret that contains config drive userdata.
                 */
                secretRef?: {
                  /**
                   * Name of the referent.
                   * This field is effectively required, but due to backwards compatibility is
                   * allowed to be empty. Instances of this type with an empty value here are
                   * almost certainly wrong.
                   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   */
                  name?: string;
                  [k: string]: unknown;
                };
                /**
                 * UserData contains config drive inline cloud-init userdata.
                 */
                userData?: string;
                /**
                 * UserDataBase64 contains config drive cloud-init userdata as a base64 encoded string.
                 */
                userDataBase64?: string;
                [k: string]: unknown;
              };
              /**
               * CloudInitNoCloud represents a cloud-init NoCloud user-data source.
               * The NoCloud data will be added as a disk to the vmi. A proper cloud-init installation is required inside the guest.
               * More info: http://cloudinit.readthedocs.io/en/latest/topics/datasources/nocloud.html
               */
              cloudInitNoCloud?: {
                /**
                 * NetworkData contains NoCloud inline cloud-init networkdata.
                 */
                networkData?: string;
                /**
                 * NetworkDataBase64 contains NoCloud cloud-init networkdata as a base64 encoded string.
                 */
                networkDataBase64?: string;
                /**
                 * NetworkDataSecretRef references a k8s secret that contains NoCloud networkdata.
                 */
                networkDataSecretRef?: {
                  /**
                   * Name of the referent.
                   * This field is effectively required, but due to backwards compatibility is
                   * allowed to be empty. Instances of this type with an empty value here are
                   * almost certainly wrong.
                   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   */
                  name?: string;
                  [k: string]: unknown;
                };
                /**
                 * UserDataSecretRef references a k8s secret that contains NoCloud userdata.
                 */
                secretRef?: {
                  /**
                   * Name of the referent.
                   * This field is effectively required, but due to backwards compatibility is
                   * allowed to be empty. Instances of this type with an empty value here are
                   * almost certainly wrong.
                   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   */
                  name?: string;
                  [k: string]: unknown;
                };
                /**
                 * UserData contains NoCloud inline cloud-init userdata.
                 */
                userData?: string;
                /**
                 * UserDataBase64 contains NoCloud cloud-init userdata as a base64 encoded string.
                 */
                userDataBase64?: string;
                [k: string]: unknown;
              };
              /**
               * ConfigMapSource represents a reference to a ConfigMap in the same namespace.
               * More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/
               */
              configMap?: {
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                name?: string;
                /**
                 * Specify whether the ConfigMap or it's keys must be defined
                 */
                optional?: boolean;
                /**
                 * The volume label of the resulting disk inside the VMI.
                 * Different bootstrapping mechanisms require different values.
                 * Typical values are "cidata" (cloud-init), "config-2" (cloud-init) or "OEMDRV" (kickstart).
                 */
                volumeLabel?: string;
                [k: string]: unknown;
              };
              /**
               * ContainerDisk references a docker image, embedding a qcow or raw disk.
               * More info: https://kubevirt.gitbooks.io/user-guide/registry-disk.html
               */
              containerDisk?: {
                /**
                 * Image is the name of the image with the embedded disk.
                 */
                image: string;
                /**
                 * Image pull policy.
                 * One of Always, Never, IfNotPresent.
                 * Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
                 * Cannot be updated.
                 * More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
                 */
                imagePullPolicy?: string;
                /**
                 * ImagePullSecret is the name of the Docker registry secret required to pull the image. The secret must already exist.
                 */
                imagePullSecret?: string;
                /**
                 * Path defines the path to disk file in the container
                 */
                path?: string;
                [k: string]: unknown;
              };
              /**
               * ContainerPath exposes a path from the virt-launcher container to the VM via virtiofs.
               * The path must correspond to an existing volumeMount in the compute container.
               */
              containerPath?: {
                /**
                 * Path is the absolute path within the virt-launcher container to expose to the VM.
                 * The path must correspond to an existing volumeMount in the compute container.
                 */
                path: string;
                /**
                 * ReadOnly controls whether the volume is exposed as read-only to the VM.
                 * Defaults to true. Write access is not currently supported.
                 */
                readOnly?: boolean;
                [k: string]: unknown;
              };
              /**
               * DataVolume represents the dynamic creation a PVC for this volume as well as
               * the process of populating that PVC with a disk image.
               */
              dataVolume?: {
                /**
                 * Hotpluggable indicates whether the volume can be hotplugged and hotunplugged.
                 */
                hotpluggable?: boolean;
                /**
                 * Name of both the DataVolume and the PVC in the same namespace.
                 */
                name: string;
                [k: string]: unknown;
              };
              /**
               * DownwardAPI represents downward API about the pod that should populate this volume
               */
              downwardAPI?: {
                /**
                 * Fields is a list of downward API volume file
                 */
                fields?: {
                  /**
                   * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
                   */
                  fieldRef?: {
                    /**
                     * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                     */
                    apiVersion?: string;
                    /**
                     * Path of the field to select in the specified API version.
                     */
                    fieldPath: string;
                    [k: string]: unknown;
                  };
                  /**
                   * Optional: mode bits used to set permissions on this file, must be an octal value
                   * between 0000 and 0777 or a decimal value between 0 and 511.
                   * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                   * If not specified, the volume defaultMode will be used.
                   * This might be in conflict with other options that affect the file
                   * mode, like fsGroup, and the result can be other mode bits set.
                   */
                  mode?: number;
                  /**
                   * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                   */
                  path: string;
                  /**
                   * Selects a resource of the container: only resources limits and requests
                   * (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                   */
                  resourceFieldRef?: {
                    /**
                     * Container name: required for volumes, optional for env vars
                     */
                    containerName?: string;
                    /**
                     * Specifies the output format of the exposed resources, defaults to "1"
                     */
                    divisor?: number | string;
                    /**
                     * Required: resource to select
                     */
                    resource: string;
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                }[];
                /**
                 * The volume label of the resulting disk inside the VMI.
                 * Different bootstrapping mechanisms require different values.
                 * Typical values are "cidata" (cloud-init), "config-2" (cloud-init) or "OEMDRV" (kickstart).
                 */
                volumeLabel?: string;
                [k: string]: unknown;
              };
              /**
               * DownwardMetrics adds a very small disk to VMIs which contains a limited view of host and guest
               * metrics. The disk content is compatible with vhostmd (https://github.com/vhostmd/vhostmd) and vm-dump-metrics.
               */
              downwardMetrics?: {
                [k: string]: unknown;
              };
              /**
               * EmptyDisk represents a temporary disk which shares the vmis lifecycle.
               * More info: https://kubevirt.gitbooks.io/user-guide/disks-and-volumes.html
               */
              emptyDisk?: {
                /**
                 * Capacity of the sparse disk.
                 */
                capacity: number | string;
                [k: string]: unknown;
              };
              /**
               * Ephemeral is a special volume source that "wraps" specified source and provides copy-on-write image on top of it.
               */
              ephemeral?: {
                /**
                 * PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace.
                 * Directly attached to the vmi via qemu.
                 * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                 */
                persistentVolumeClaim?: {
                  /**
                   * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume.
                   * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                   */
                  claimName: string;
                  /**
                   * readOnly Will force the ReadOnly setting in VolumeMounts.
                   * Default false.
                   */
                  readOnly?: boolean;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              /**
               * HostDisk represents a disk created on the cluster level
               */
              hostDisk?: {
                /**
                 * Capacity of the sparse disk
                 */
                capacity?: number | string;
                /**
                 * The path to HostDisk image located on the cluster
                 */
                path: string;
                /**
                 * Shared indicate whether the path is shared between nodes
                 */
                shared?: boolean;
                /**
                 * Contains information if disk.img exists or should be created
                 * allowed options are 'Disk' and 'DiskOrCreate'
                 */
                type: string;
                [k: string]: unknown;
              };
              /**
               * MemoryDump is attached to the virt launcher and is populated with a memory dump of the vmi
               */
              memoryDump?: {
                /**
                 * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume.
                 * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                 */
                claimName: string;
                /**
                 * Hotpluggable indicates whether the volume can be hotplugged and hotunplugged.
                 */
                hotpluggable?: boolean;
                /**
                 * readOnly Will force the ReadOnly setting in VolumeMounts.
                 * Default false.
                 */
                readOnly?: boolean;
                [k: string]: unknown;
              };
              /**
               * Volume's name.
               * Must be a DNS_LABEL and unique within the vmi.
               * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              name: string;
              /**
               * PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace.
               * Directly attached to the vmi via qemu.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
               */
              persistentVolumeClaim?: {
                /**
                 * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume.
                 * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                 */
                claimName: string;
                /**
                 * Hotpluggable indicates whether the volume can be hotplugged and hotunplugged.
                 */
                hotpluggable?: boolean;
                /**
                 * readOnly Will force the ReadOnly setting in VolumeMounts.
                 * Default false.
                 */
                readOnly?: boolean;
                [k: string]: unknown;
              };
              /**
               * SecretVolumeSource represents a reference to a secret data in the same namespace.
               * More info: https://kubernetes.io/docs/concepts/configuration/secret/
               */
              secret?: {
                /**
                 * Specify whether the Secret or it's keys must be defined
                 */
                optional?: boolean;
                /**
                 * Name of the secret in the pod's namespace to use.
                 * More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                 */
                secretName?: string;
                /**
                 * The volume label of the resulting disk inside the VMI.
                 * Different bootstrapping mechanisms require different values.
                 * Typical values are "cidata" (cloud-init), "config-2" (cloud-init) or "OEMDRV" (kickstart).
                 */
                volumeLabel?: string;
                [k: string]: unknown;
              };
              /**
               * ServiceAccountVolumeSource represents a reference to a service account.
               * There can only be one volume of this type!
               * More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
               */
              serviceAccount?: {
                /**
                 * Name of the service account in the pod's namespace to use.
                 * More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
                 */
                serviceAccountName?: string;
                [k: string]: unknown;
              };
              /**
               * Represents a Sysprep volume source.
               */
              sysprep?: {
                /**
                 * ConfigMap references a ConfigMap that contains Sysprep answer file named autounattend.xml that should be attached as disk of CDROM type.
                 */
                configMap?: {
                  /**
                   * Name of the referent.
                   * This field is effectively required, but due to backwards compatibility is
                   * allowed to be empty. Instances of this type with an empty value here are
                   * almost certainly wrong.
                   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   */
                  name?: string;
                  [k: string]: unknown;
                };
                /**
                 * Secret references a k8s Secret that contains Sysprep answer file named autounattend.xml that should be attached as disk of CDROM type.
                 */
                secret?: {
                  /**
                   * Name of the referent.
                   * This field is effectively required, but due to backwards compatibility is
                   * allowed to be empty. Instances of this type with an empty value here are
                   * almost certainly wrong.
                   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   */
                  name?: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * UpdateVolumesStrategy is the strategy to apply on volumes updates
         */
        updateVolumesStrategy?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  status?: {
    conditions?: {
      lastProbeTime?: string;
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status: string;
      type: string;
      [k: string]: unknown;
    }[];
    /**
     * Canonical form of the label selector for HPA which consumes it through the scale subresource.
     */
    labelSelector?: string;
    readyReplicas?: number;
    replicas?: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
