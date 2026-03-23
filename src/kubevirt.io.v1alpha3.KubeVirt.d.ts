/** Generated from Remote JSON Schema for kubevirt.io.v1alpha3.KubeVirt */

/**
 * KubeVirt represents the object deploying all KubeVirt resources
 */
export interface KubevirtIoV1Alpha3KubeVirt {
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
    certificateRotateStrategy?: {
      selfSigned?: {
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
           * The amount of time before the currently issued certificate's "notAfter"
           * time that we will begin to attempt to renew the certificate.
           */
          renewBefore?: string;
          [k: string]: unknown;
        };
        /**
         * Deprecated. Use CA.Duration and CA.RenewBefore instead
         */
        caOverlapInterval?: string;
        /**
         * Deprecated. Use CA.Duration instead
         */
        caRotateInterval?: string;
        /**
         * Deprecated. Use Server.Duration instead
         */
        certRotateInterval?: string;
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
           * The amount of time before the currently issued certificate's "notAfter"
           * time that we will begin to attempt to renew the certificate.
           */
          renewBefore?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * holds kubevirt configurations.
     * same as the virt-configMap
     */
    configuration?: {
      /**
       * AdditionalGuestMemoryOverheadRatio can be used to increase the virtualization infrastructure
       * overhead. This is useful, since the calculation of this overhead is not accurate and cannot
       * be entirely known in advance. The ratio that is being set determines by which factor to increase
       * the overhead calculated by Kubevirt. A higher ratio means that the VMs would be less compromised
       * by node pressures, but would mean that fewer VMs could be scheduled to a node.
       * If not set, the default is 1.
       */
      additionalGuestMemoryOverheadRatio?: string;
      /**
       * ReloadableComponentConfiguration holds all generic k8s configuration options which can
       * be reloaded by components without requiring a restart.
       */
      apiConfiguration?: {
        /**
         * RestClient can be used to tune certain aspects of the k8s client in use.
         */
        restClient?: {
          /**
           * RateLimiter allows selecting and configuring different rate limiters for the k8s client.
           */
          rateLimiter?: {
            tokenBucketRateLimiter?: {
              /**
               * Maximum burst for throttle.
               * If it's zero, the component default will be used
               */
              burst: number;
              /**
               * QPS indicates the maximum QPS to the apiserver from this client.
               * If it's zero, the component default will be used
               */
              qps: number;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      architectureConfiguration?: {
        amd64?: {
          emulatedMachines?: string[];
          machineType?: string;
          ovmfPath?: string;
          [k: string]: unknown;
        };
        arm64?: {
          emulatedMachines?: string[];
          machineType?: string;
          ovmfPath?: string;
          [k: string]: unknown;
        };
        defaultArchitecture?: string;
        /**
         * Deprecated: ppc64le architecture is no longer supported.
         */
        ppc64le?: {
          emulatedMachines?: string[];
          machineType?: string;
          ovmfPath?: string;
          [k: string]: unknown;
        };
        s390x?: {
          emulatedMachines?: string[];
          machineType?: string;
          ovmfPath?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * When set, AutoCPULimitNamespaceLabelSelector will set a CPU limit on virt-launcher for VMIs running inside
       * namespaces that match the label selector.
       * The CPU limit will equal the number of requested vCPUs.
       * This setting does not apply to VMIs with dedicated CPUs.
       */
      autoCPULimitNamespaceLabelSelector?: {
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
       * ChangedBlockTrackingLabelSelectors defines label selectors. VMs matching these selectors will have changed block tracking enabled.
       * Enabling changedBlockTracking is mandatory for performing storage-agnostic backups and incremental backups.
       */
      changedBlockTrackingLabelSelectors?: {
        /**
         * NamespaceSelector will enable changedBlockTracking on all VMs running inside namespaces that match the label selector.
         */
        namespaceLabelSelector?: {
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
         * VirtualMachineSelector will enable changedBlockTracking on all VMs that match the label selector.
         */
        virtualMachineLabelSelector?: {
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
      /**
       * CommonInstancetypesDeployment controls the deployment of common-instancetypes resources
       */
      commonInstancetypesDeployment?: {
        /**
         * Enabled controls the deployment of common-instancetypes resources, defaults to True.
         */
        enabled?: boolean;
        [k: string]: unknown;
      };
      /**
       * ReloadableComponentConfiguration holds all generic k8s configuration options which can
       * be reloaded by components without requiring a restart.
       */
      controllerConfiguration?: {
        /**
         * RestClient can be used to tune certain aspects of the k8s client in use.
         */
        restClient?: {
          /**
           * RateLimiter allows selecting and configuring different rate limiters for the k8s client.
           */
          rateLimiter?: {
            tokenBucketRateLimiter?: {
              /**
               * Maximum burst for throttle.
               * If it's zero, the component default will be used
               */
              burst: number;
              /**
               * QPS indicates the maximum QPS to the apiserver from this client.
               * If it's zero, the component default will be used
               */
              qps: number;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      cpuModel?: string;
      cpuRequest?: number | string;
      defaultRuntimeClass?: string;
      /**
       * DeveloperConfiguration holds developer options
       */
      developerConfiguration?: {
        /**
         * Enable the ability to pprof profile KubeVirt control plane
         */
        clusterProfiler?: boolean;
        /**
         * For each requested virtual CPU, CPUAllocationRatio defines how much physical CPU to request per VMI
         * from the hosting node. The value is in fraction of a CPU thread (or core on non-hyperthreaded nodes).
         * For example, a value of 1 means 1 physical CPU thread per VMI CPU thread.
         * A value of 100 would be 1% of a physical thread allocated for each requested VMI thread.
         * This option has no effect on VMIs that request dedicated CPUs. More information at:
         * https://kubevirt.io/user-guide/operations/node_overcommit/#node-cpu-allocation-ratio
         * Defaults to 10
         */
        cpuAllocationRatio?: number;
        /**
         * DiskVerification holds container disks verification limits
         */
        diskVerification?: {
          memoryLimit: number | string;
          [k: string]: unknown;
        };
        /**
         * FeatureGates is the list of experimental features to enable. Defaults to none
         */
        featureGates?: string[];
        /**
         * LogVerbosity sets log verbosity level of  various components
         */
        logVerbosity?: {
          /**
           * NodeVerbosity represents a map of nodes with a specific verbosity level
           */
          nodeVerbosity?: {
            [k: string]: number;
          };
          virtAPI?: number;
          virtController?: number;
          virtHandler?: number;
          virtLauncher?: number;
          virtOperator?: number;
          virtSynchronizationController?: number;
          [k: string]: unknown;
        };
        /**
         * MemoryOvercommit is the percentage of memory we want to give VMIs compared to the amount
         * given to its parent pod (virt-launcher). For example, a value of 102 means the VMI will
         * "see" 2% more memory than its parent pod. Values under 100 are effectively "undercommits".
         * Overcommits can lead to memory exhaustion, which in turn can lead to crashes. Use carefully.
         * Defaults to 100
         */
        memoryOvercommit?: number;
        /**
         * Allow overriding the automatically determined minimum TSC frequency of the cluster
         * and fixate the minimum to this frequency.
         */
        minimumClusterTSCFrequency?: number;
        /**
         * MinimumReservePVCBytes is the amount of space, in bytes, to leave unused on disks.
         * Defaults to 131072 (128KiB)
         */
        minimumReservePVCBytes?: number;
        /**
         * NodeSelectors allows restricting VMI creation to nodes that match a set of labels.
         * Defaults to none
         */
        nodeSelectors?: {
          [k: string]: string;
        };
        /**
         * LessPVCSpaceToleration determines how much smaller, in percentage, disk PVCs are
         * allowed to be compared to the requested size (to account for various overheads).
         * Defaults to 10
         */
        pvcTolerateLessSpaceUpToPercent?: number;
        /**
         * UseEmulation can be set to true to allow fallback to software emulation
         * in case hardware-assisted emulation is not available. Defaults to false
         */
        useEmulation?: boolean;
        [k: string]: unknown;
      };
      /**
       * Deprecated. Use architectureConfiguration instead.
       */
      emulatedMachines?: string[];
      /**
       * EvictionStrategy defines at the cluster level if the VirtualMachineInstance should be
       * migrated instead of shut-off in case of a node drain. If the VirtualMachineInstance specific
       * field is set it overrides the cluster level one.
       */
      evictionStrategy?: string;
      /**
       * ReloadableComponentConfiguration holds all generic k8s configuration options which can
       * be reloaded by components without requiring a restart.
       */
      handlerConfiguration?: {
        /**
         * RestClient can be used to tune certain aspects of the k8s client in use.
         */
        restClient?: {
          /**
           * RateLimiter allows selecting and configuring different rate limiters for the k8s client.
           */
          rateLimiter?: {
            tokenBucketRateLimiter?: {
              /**
               * Maximum burst for throttle.
               * If it's zero, the component default will be used
               */
              burst: number;
              /**
               * QPS indicates the maximum QPS to the apiserver from this client.
               * If it's zero, the component default will be used
               */
              qps: number;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * PullPolicy describes a policy for if/when to pull a container image
       */
      imagePullPolicy?: string;
      /**
       * Instancetype configuration
       */
      instancetype?: {
        /**
         * ReferencePolicy defines how an instance type or preference should be referenced by the VM after submission, supported values are:
         * reference (default) - Where a copy of the original object is stashed in a ControllerRevision and referenced by the VM.
         * expand - Where the instance type or preference are expanded into the VM if no revisionNames have been populated.
         * expandAll - Where the instance type or preference are expanded into the VM regardless of revisionNames previously being populated.
         */
        referencePolicy?: 'reference' | 'expand' | 'expandAll';
        [k: string]: unknown;
      };
      /**
       * KSMConfiguration holds the information regarding the enabling the KSM in the nodes (if available).
       */
      ksmConfiguration?: {
        /**
         * NodeLabelSelector is a selector that filters in which nodes the KSM will be enabled.
         * Empty NodeLabelSelector will enable ksm for every node.
         */
        nodeLabelSelector?: {
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
      /**
       * LiveUpdateConfiguration holds defaults for live update features
       */
      liveUpdateConfiguration?: {
        /**
         * MaxCpuSockets provides a MaxSockets value for VMs that do not provide their own.
         * For VMs with more sockets than maximum the MaxSockets will be set to equal number of sockets.
         */
        maxCpuSockets?: number;
        /**
         * MaxGuest defines the maximum amount memory that can be allocated
         * to the guest using hotplug.
         */
        maxGuest?: number | string;
        /**
         * MaxHotplugRatio is the ratio used to define the max amount
         * of a hotplug resource that can be made available to a VM
         * when the specific Max* setting is not defined (MaxCpuSockets, MaxGuest)
         * Example: VM is configured with 512Mi of guest memory, if MaxGuest is not
         * defined and MaxHotplugRatio is 2 then MaxGuest = 1Gi
         * defaults to 4
         */
        maxHotplugRatio?: number;
        [k: string]: unknown;
      };
      /**
       * Deprecated. Use architectureConfiguration instead.
       */
      machineType?: string;
      /**
       * MediatedDevicesConfiguration holds information about MDEV types to be defined, if available
       */
      mediatedDevicesConfiguration?: {
        mediatedDeviceTypes?: string[];
        /**
         * Deprecated. Use mediatedDeviceTypes instead.
         */
        mediatedDevicesTypes?: string[];
        nodeMediatedDeviceTypes?: {
          mediatedDeviceTypes?: string[];
          /**
           * Deprecated. Use mediatedDeviceTypes instead.
           */
          mediatedDevicesTypes?: string[];
          /**
           * NodeSelector is a selector which must be true for the vmi to fit on a node.
           * Selector which must match a node's labels for the vmi to be scheduled on that node.
           * More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
           */
          nodeSelector: {
            [k: string]: string;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      memBalloonStatsPeriod?: number;
      /**
       * MigrationConfiguration holds migration options.
       * Can be overridden for specific groups of VMs though migration policies.
       * Visit https://kubevirt.io/user-guide/operations/migration_policies/ for more information.
       */
      migrations?: {
        /**
         * AllowAutoConverge allows the platform to compromise performance/availability of VMIs to
         * guarantee successful VMI live migrations. Defaults to false
         */
        allowAutoConverge?: boolean;
        /**
         * AllowPostCopy enables post-copy live migrations. Such migrations allow even the busiest VMIs
         * to successfully live-migrate. However, events like a network failure can cause a VMI crash.
         * If set to true, migrations will still start in pre-copy, but switch to post-copy when
         * CompletionTimeoutPerGiB triggers. Defaults to false
         */
        allowPostCopy?: boolean;
        /**
         * AllowWorkloadDisruption indicates that the migration shouldn't be
         * canceled after acceptableCompletionTime is exceeded. Instead, if
         * permitted, migration will be switched to post-copy or the VMI will be
         * paused to allow the migration to complete
         */
        allowWorkloadDisruption?: boolean;
        /**
         * BandwidthPerMigration limits the amount of network bandwidth live migrations are allowed to use.
         * The value is in quantity per second. Defaults to 0 (no limit)
         */
        bandwidthPerMigration?: number | string;
        /**
         * CompletionTimeoutPerGiB is the maximum number of seconds per GiB a migration is allowed to take.
         * If the timeout is reached, the migration will be either paused, switched
         * to post-copy or cancelled depending on other settings. Defaults to 150
         */
        completionTimeoutPerGiB?: number;
        /**
         * When set to true, DisableTLS will disable the additional layer of live migration encryption
         * provided by KubeVirt. This is usually a bad idea. Defaults to false
         */
        disableTLS?: boolean;
        /**
         * By default, the SELinux level of target virt-launcher pods is forced to the level of the source virt-launcher.
         * When set to true, MatchSELinuxLevelOnMigration lets the CRI auto-assign a random level to the target.
         * That will ensure the target virt-launcher doesn't share categories with another pod on the node.
         * However, migrations will fail when using RWX volumes that don't automatically deal with SELinux levels.
         */
        matchSELinuxLevelOnMigration?: boolean;
        /**
         * Network is the name of the CNI network to use for live migrations. By default, migrations go
         * through the pod network.
         */
        network?: string;
        /**
         * NodeDrainTaintKey defines the taint key that indicates a node should be drained.
         * Note: this option relies on the deprecated node taint feature. Default: kubevirt.io/drain
         */
        nodeDrainTaintKey?: string;
        /**
         * ParallelMigrationsPerCluster is the total number of concurrent live migrations
         * allowed cluster-wide. Defaults to 5
         */
        parallelMigrationsPerCluster?: number;
        /**
         * ParallelOutboundMigrationsPerNode is the maximum number of concurrent outgoing live migrations
         * allowed per node. Defaults to 2
         */
        parallelOutboundMigrationsPerNode?: number;
        /**
         * ProgressTimeout is the maximum number of seconds a live migration is allowed to make no progress.
         * Hitting this timeout means a migration transferred 0 data for that many seconds. The migration is
         * then considered stuck and therefore cancelled. Defaults to 150
         */
        progressTimeout?: number;
        /**
         * UnsafeMigrationOverride allows live migrations to occur even if the compatibility check
         * indicates the migration will be unsafe to the guest. Defaults to false
         */
        unsafeMigrationOverride?: boolean;
        [k: string]: unknown;
      };
      minCPUModel?: string;
      /**
       * NetworkConfiguration holds network options
       */
      network?: {
        binding?: {
          [k: string]: {
            /**
             * ComputeResourceOverhead specifies the resource overhead that should be added to the compute container when using the binding.
             * version: v1alphav1
             */
            computeResourceOverhead?: {
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
             * DomainAttachmentType is a standard domain network attachment method kubevirt supports.
             * Supported values: "tap", "managedTap" (since v1.4).
             * The standard domain attachment can be used instead or in addition to the sidecarImage.
             * version: 1alphav1
             */
            domainAttachmentType?: string;
            /**
             * DownwardAPI specifies what kind of data should be exposed to the binding plugin sidecar.
             * Supported values: "device-info"
             * version: v1alphav1
             */
            downwardAPI?: string;
            /**
             * Migration means the VM using the plugin can be safely migrated
             * version: 1alphav1
             */
            migration?: {
              /**
               * Method defines a pre-defined migration methodology
               * version: 1alphav1
               */
              method?: string;
              [k: string]: unknown;
            };
            /**
             * NetworkAttachmentDefinition references to a NetworkAttachmentDefinition CR object.
             * Format: <name>, <namespace>/<name>.
             * If namespace is not specified, VMI namespace is assumed.
             * version: 1alphav1
             */
            networkAttachmentDefinition?: string;
            /**
             * SidecarImage references a container image that runs in the virt-launcher pod.
             * The sidecar handles (libvirt) domain configuration and optional services.
             * version: 1alphav1
             */
            sidecarImage?: string;
            [k: string]: unknown;
          };
        };
        defaultNetworkInterface?: string;
        permitBridgeInterfaceOnPodNetwork?: boolean;
        /**
         * DeprecatedPermitSlirpInterface is an alias for the deprecated PermitSlirpInterface.
         * Deprecated: Removed in v1.3.
         */
        permitSlirpInterface?: boolean;
        [k: string]: unknown;
      };
      obsoleteCPUModels?: {
        [k: string]: boolean;
      };
      /**
       * Deprecated. Use architectureConfiguration instead.
       */
      ovmfPath?: string;
      /**
       * PermittedHostDevices holds information about devices allowed for passthrough
       */
      permittedHostDevices?: {
        mediatedDevices?: {
          externalResourceProvider?: boolean;
          mdevNameSelector: string;
          resourceName: string;
          [k: string]: unknown;
        }[];
        pciHostDevices?: {
          /**
           * If true, KubeVirt will leave the allocation and monitoring to an
           * external device plugin
           */
          externalResourceProvider?: boolean;
          /**
           * The vendor_id:product_id tuple of the PCI device
           */
          pciVendorSelector: string;
          /**
           * The name of the resource that is representing the device. Exposed by
           * a device plugin and requested by VMs. Typically of the form
           * vendor.com/product_name
           */
          resourceName: string;
          [k: string]: unknown;
        }[];
        usb?: {
          /**
           * If true, KubeVirt will leave the allocation and monitoring to an
           * external device plugin
           */
          externalResourceProvider?: boolean;
          /**
           * Identifies the list of USB host devices.
           * e.g: kubevirt.io/storage, kubevirt.io/bootable-usb, etc
           */
          resourceName: string;
          selectors?: {
            product: string;
            vendor: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      /**
       * SeccompConfiguration holds Seccomp configuration for Kubevirt components
       */
      seccompConfiguration?: {
        /**
         * VirtualMachineInstanceProfile defines what profile should be used with virt-launcher. Defaults to none
         */
        virtualMachineInstanceProfile?: {
          /**
           * CustomProfile allows to request arbitrary profile for virt-launcher
           */
          customProfile?: {
            localhostProfile?: string;
            runtimeDefaultProfile?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      selinuxLauncherType?: string;
      smbios?: {
        family?: string;
        manufacturer?: string;
        product?: string;
        sku?: string;
        version?: string;
        [k: string]: unknown;
      };
      /**
       * SupportContainerResources specifies the resource requirements for various types of supporting containers such as container disks/virtiofs/sidecars and hotplug attachment pods. If omitted a sensible default will be supplied.
       */
      supportContainerResources?: {
        /**
         * ResourceRequirementsWithoutClaims describes the compute resource requirements.
         * This struct was taken from the k8s.ResourceRequirements and cleaned up the 'Claims' field.
         */
        resources: {
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
        type: string;
        [k: string]: unknown;
      }[];
      /**
       * deprecated
       */
      supportedGuestAgentVersions?: string[];
      /**
       * TLSConfiguration holds TLS options
       */
      tlsConfiguration?: {
        ciphers?: string[];
        /**
         * MinTLSVersion is a way to specify the minimum protocol version that is acceptable for TLS connections.
         * Protocol versions are based on the following most common TLS configurations:
         *
         *   https://ssl-config.mozilla.org/
         *
         * Note that SSLv3.0 is not a supported protocol version due to well known
         * vulnerabilities such as POODLE: https://en.wikipedia.org/wiki/POODLE
         */
        minTLSVersion?: 'VersionTLS10' | 'VersionTLS11' | 'VersionTLS12' | 'VersionTLS13';
        [k: string]: unknown;
      };
      virtualMachineInstancesPerNode?: number;
      /**
       * VirtualMachineOptions holds the cluster level information regarding the virtual machine.
       */
      virtualMachineOptions?: {
        /**
         * DisableFreePageReporting disable the free page reporting of
         * memory balloon device https://libvirt.org/formatdomain.html#memory-balloon-device.
         * This will have effect only if AutoattachMemBalloon is not false and the vmi is not
         * requesting any high performance feature (dedicatedCPU/realtime/hugePages), in which free page reporting is always disabled.
         */
        disableFreePageReporting?: {
          [k: string]: unknown;
        };
        /**
         * DisableSerialConsoleLog disables logging the auto-attached default serial console.
         * If not set, serial console logs will be written to a file and then streamed from a container named 'guest-console-log'.
         * The value can be individually overridden for each VM, not relevant if AutoattachSerialConsole is disabled.
         */
        disableSerialConsoleLog?: {
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * VMRolloutStrategy defines how live-updatable fields, like CPU sockets, memory,
       * tolerations, and affinity, are propagated from a VM to its VMI.
       */
      vmRolloutStrategy?: 'Stage' | 'LiveUpdate';
      /**
       * VMStateStorageClass is the name of the storage class to use for the PVCs created to preserve VM state, like TPM.
       */
      vmStateStorageClass?: string;
      /**
       * ReloadableComponentConfiguration holds all generic k8s configuration options which can
       * be reloaded by components without requiring a restart.
       */
      webhookConfiguration?: {
        /**
         * RestClient can be used to tune certain aspects of the k8s client in use.
         */
        restClient?: {
          /**
           * RateLimiter allows selecting and configuring different rate limiters for the k8s client.
           */
          rateLimiter?: {
            tokenBucketRateLimiter?: {
              /**
               * Maximum burst for throttle.
               * If it's zero, the component default will be used
               */
              burst: number;
              /**
               * QPS indicates the maximum QPS to the apiserver from this client.
               * If it's zero, the component default will be used
               */
              qps: number;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
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
        handler?: {
          [k: string]: string;
        };
        [k: string]: unknown;
      };
      patches?: {
        patch: string;
        resourceName: string;
        resourceType: string;
        type: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * The ImagePullPolicy to use.
     */
    imagePullPolicy?: string;
    /**
     * The imagePullSecrets to pull the container images from
     * Defaults to none
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
     * The image registry to pull the container images from
     * Defaults to the same registry the operator's container image is pulled from.
     */
    imageRegistry?: string;
    /**
     * The image tag to use for the continer images installed.
     * Defaults to the same tag as the operator's container image.
     */
    imageTag?: string;
    /**
     * selectors and tolerations that should apply to KubeVirt infrastructure components
     */
    infra?: {
      /**
       * nodePlacement describes scheduling configuration for specific
       * KubeVirt components
       */
      nodePlacement?: {
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
      /**
       * replicas indicates how many replicas should be created for each KubeVirt infrastructure
       * component (like virt-api or virt-controller). Defaults to 2.
       * WARNING: this is an advanced feature that prevents auto-scaling for core kubevirt components. Please use with caution!
       */
      replicas?: number;
      [k: string]: unknown;
    };
    /**
     * The name of the Prometheus service account that needs read-access to KubeVirt endpoints
     * Defaults to prometheus-k8s
     */
    monitorAccount?: string;
    /**
     * The namespace Prometheus is deployed in
     * Defaults to openshift-monitor
     */
    monitorNamespace?: string;
    /**
     * Designate the apps.kubevirt.io/component label for KubeVirt components.
     * Useful if KubeVirt is included as part of a product.
     * If ProductComponent is not specified, the component label default value is kubevirt.
     */
    productComponent?: string;
    /**
     * Designate the apps.kubevirt.io/part-of label for KubeVirt components.
     * Useful if KubeVirt is included as part of a product.
     * If ProductName is not specified, the part-of label will be omitted.
     */
    productName?: string;
    /**
     * Designate the apps.kubevirt.io/version label for KubeVirt components.
     * Useful if KubeVirt is included as part of a product.
     * If ProductVersion is not specified, KubeVirt's version will be used.
     */
    productVersion?: string;
    /**
     * The namespace the service monitor will be deployed
     *  When ServiceMonitorNamespace is set, then we'll install the service monitor object in that namespace
     * otherwise we will use the monitoring namespace.
     */
    serviceMonitorNamespace?: string;
    /**
     * Specify the port to listen on for VMI status synchronization traffic. Default is 9185
     */
    synchronizationPort?: string;
    /**
     * Specifies if kubevirt can be deleted if workloads are still present.
     * This is mainly a precaution to avoid accidental data loss
     */
    uninstallStrategy?: string;
    /**
     * WorkloadUpdateStrategy defines at the cluster level how to handle
     * automated workload updates
     */
    workloadUpdateStrategy?: {
      /**
       * BatchEvictionInterval Represents the interval to wait before issuing the next
       * batch of shutdowns
       *
       * Defaults to 1 minute
       */
      batchEvictionInterval?: string;
      /**
       * BatchEvictionSize Represents the number of VMIs that can be forced updated per
       * the BatchShutdownInteral interval
       *
       * Defaults to 10
       */
      batchEvictionSize?: number;
      /**
       * WorkloadUpdateMethods defines the methods that can be used to disrupt workloads
       * during automated workload updates.
       * When multiple methods are present, the least disruptive method takes
       * precedence over more disruptive methods. For example if both LiveMigrate and Shutdown
       * methods are listed, only VMs which are not live migratable will be restarted/shutdown
       *
       * An empty list defaults to no automated workload updating
       */
      workloadUpdateMethods?: string[];
      [k: string]: unknown;
    };
    /**
     * selectors and tolerations that should apply to KubeVirt workloads
     */
    workloads?: {
      /**
       * nodePlacement describes scheduling configuration for specific
       * KubeVirt components
       */
      nodePlacement?: {
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
      /**
       * replicas indicates how many replicas should be created for each KubeVirt infrastructure
       * component (like virt-api or virt-controller). Defaults to 2.
       * WARNING: this is an advanced feature that prevents auto-scaling for core kubevirt components. Please use with caution!
       */
      replicas?: number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * KubeVirtStatus represents information pertaining to a KubeVirt deployment.
   */
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
    defaultArchitecture?: string;
    generations?: {
      /**
       * group is the group of the thing you're tracking
       */
      group: string;
      /**
       * hash is an optional field set for resources without generation that are content sensitive like secrets and configmaps
       */
      hash?: string;
      /**
       * lastGeneration is the last generation of the workload controller involved
       */
      lastGeneration: number;
      /**
       * name is the name of the thing you're tracking
       */
      name: string;
      /**
       * namespace is where the thing you're tracking is
       */
      namespace?: string;
      /**
       * resource is the resource type of the thing you're tracking
       */
      resource: string;
      [k: string]: unknown;
    }[];
    observedDeploymentConfig?: string;
    observedDeploymentID?: string;
    observedGeneration?: number;
    observedKubeVirtRegistry?: string;
    observedKubeVirtVersion?: string;
    operatorVersion?: string;
    outdatedVirtualMachineInstanceWorkloads?: number;
    /**
     * KubeVirtPhase is a label for the phase of a KubeVirt deployment at the current time.
     */
    phase?: string;
    synchronizationAddresses?: string[];
    targetDeploymentConfig?: string;
    targetDeploymentID?: string;
    targetKubeVirtRegistry?: string;
    targetKubeVirtVersion?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
